import React, { useState, useRef, useEffect, useMemo } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const scrollContainerRef = useRef(null)

  const [currentPage, setCurrentPage] = useState('home')
  const [slideDir, setSlideDir] = useState('right')
  const [isAnimating, setIsAnimating] = useState(false)
  const isAnimatingRef = useRef(false)
  const armedRef = useRef({ up: false, down: false })
  const armedTimerRef = useRef(null)
  const [armed, setArmed] = useState(null) // 'up' | 'down' | null

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    work: <Work />,
    contact: <Contact />,
    footer: <Footer />,
  }

  const pagesArray = useMemo(() => Object.keys(pages), [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    let lastTime = 0
    const onWheel = (e) => {
      const now = Date.now()
      if (isAnimatingRef.current) return
      if (now - lastTime < 800) return
      lastTime = now

      // Determine scroll direction
      const dir = e.deltaY > 0 ? 1 : -1

      // If the current page can scroll vertically, allow native vertical scrolling
      const pageEl = el.querySelector('.page-slide')
      if (pageEl) {
        const canScrollVertically = pageEl.scrollHeight > pageEl.clientHeight + 1
        if (canScrollVertically) {
          const atTop = pageEl.scrollTop <= 0
          const atBottom = Math.ceil(pageEl.scrollTop + pageEl.clientHeight) >= pageEl.scrollHeight

          // If not at boundary in current scroll direction, do nothing and let native scroll occur
          if ((dir > 0 && !atBottom) || (dir < 0 && !atTop)) {
            return
          }

          // We're at the boundary in the scroll direction. Require an "arm" scroll first,
          // then a second scroll to actually perform the horizontal page navigation.
          const armKey = dir > 0 ? 'down' : 'up'
          const oppositeKey = dir > 0 ? 'up' : 'down'

          // If the opposite direction was armed, clear it
          if (armedRef.current[oppositeKey]) {
            armedRef.current[oppositeKey] = false
            // reflect in UI
            if (armed === oppositeKey) setArmed(null)
          }

          if (!armedRef.current[armKey]) {
            // Arm the boundary — user must scroll once more to trigger page change
            armedRef.current[armKey] = true
            setArmed(armKey)
            // reset after 1.5s if no follow-up
            if (armedTimerRef.current) clearTimeout(armedTimerRef.current)
            armedTimerRef.current = setTimeout(() => {
              armedRef.current[armKey] = false
              armedTimerRef.current = null
              // reflect in UI
              setArmed(null)
            }, 1500)
            return
          } else {
            // Already armed — consume the arm and proceed
            armedRef.current[armKey] = false
            if (armedTimerRef.current) {
              clearTimeout(armedTimerRef.current)
              armedTimerRef.current = null
            }
            // reflect in UI then fall through to page change
            setArmed(null)
          }
        }
      }

      const currentIndex = pagesArray.indexOf(currentPage)
      const nextIndex = Math.min(Math.max(0, currentIndex + dir), pagesArray.length - 1)
      if (nextIndex === currentIndex) return

      const nextPage = pagesArray[nextIndex]
      setSlideDir(dir > 0 ? 'right' : 'left')
      setIsAnimating(true)
      isAnimatingRef.current = true
      setCurrentPage(nextPage)

      setTimeout(() => {
        setIsAnimating(false)
        isAnimatingRef.current = false
      }, 1000)
    }

    el.addEventListener('wheel', onWheel, { passive: true })
    return () => {
      el.removeEventListener('wheel', onWheel)
      if (armedTimerRef.current) {
        clearTimeout(armedTimerRef.current)
        armedTimerRef.current = null
      }
    }
  }, [currentPage, pagesArray])

  const scrollToSection = (sectionId) => {
    setCurrentPage(sectionId)
  }

  // Expose scrollToSection globally for Home CTA buttons
  useEffect(() => {
    window.__scrollToSection = scrollToSection
    return () => delete window.__scrollToSection
  }, [scrollToSection])

  return (
    <div className="bg-white text-slate-950 w-full overflow-hidden main-wrapper">
      <Header scrollToSection={scrollToSection} activeSection={currentPage} />

      <div ref={scrollContainerRef} className="w-full relative overflow-hidden">
        <div
          className="w-full transition-all duration-500 ease-in-out page-slide"
          key={currentPage}
          style={{
            height: 'calc(100vh - var(--header-height))',
            animation: isAnimating ? `${slideDir === 'right' ? 'slideRight' : 'slideLeft'} 1s ease-in-out` : 'none',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorY: 'contain'
          }}
        >
          {currentPage === 'footer' ? (
            <Footer scrollToSection={scrollToSection} currentPage={currentPage} />
          ) : currentPage === 'home' ? (
            pages[currentPage]
          ) : (
            <div style={{ marginBottom: '48px' }}>{pages[currentPage]}</div>
          )}
        </div>
      </div>
      <style>{`
        .armed-indicator { position: fixed; left: 50%; transform: translateX(-50%); z-index: 60; pointer-events: none; transition: opacity .18s ease, transform .18s ease; opacity: 0; }
        .armed-indicator.show { opacity: 1; }
        .armed-indicator.up { top: calc(var(--header-height) + 12px); }
        .armed-indicator.down { bottom: 28px; }
        .armed-arrow { display:flex; align-items:center; justify-content:center; width:44px; height:44px; background:#fff; border:1px solid rgba(0,0,0,0.06); box-shadow:0 6px 20px rgba(0,0,0,0.08); border-radius:999px; font-size:20px; color:#DC143C; }
        @keyframes armFloat { from { transform: translateY(0);} to { transform: translateY(-6px);} }
        .armed-arrow { animation: armFloat 900ms ease-in-out infinite alternate; }
      `}</style>

      {armed && (
        <div className={`armed-indicator ${armed} show`}>
          <div className="armed-arrow">{armed === 'down' ? '→' : '←'}</div>
        </div>
      )}
    </div>
  )
}

export default App