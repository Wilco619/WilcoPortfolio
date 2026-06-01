import React, { useState, useEffect } from 'react'
import WMLogo from './WMLogo'

const navItems = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'projects', label: 'Projects' },
  { id: 'work',     label: 'Work'     },
  { id: 'contact',  label: 'Contact'  },
  { id: 'footer',   label: 'Footer'   },
]

const Header = ({ scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Adds a subtle border when the page has scrolled (horizontally)
  useEffect(() => {
    const container = document.querySelector('.scroll-container') // adjust selector to match your scroll wrapper
    if (!container) return
    const onScroll = () => setScrolled(container.scrollLeft > 40)
    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      fontFamily: "'DM Sans', sans-serif",
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid #d2d2d2' : '1px solid transparent',
      transition: 'border-color 0.3s ease, background 0.3s ease',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-btn {
          position: relative;
          padding: 6px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #DC143C;
          transition: width 0.25s ease;
        }
        .nav-btn:hover { color: #1a1a1a; }
        .nav-btn:hover::after { width: 100%; }
        .nav-btn.active { color: #DC143C; }
        .nav-btn.active::after { width: 100%; }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .mobile-menu-button span {
          display: block;
          width: 22px;
          height: 2px;
          background: #1a1a1a;
          border-radius: 999px;
          position: relative;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .mobile-menu-button span::before,
        .mobile-menu-button span::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 2px;
          background: #1a1a1a;
          border-radius: 999px;
          left: 0;
          transition: transform 0.2s ease;
        }
        .mobile-menu-button span::before { top: -7px; }
        .mobile-menu-button span::after { top: 7px; }
        .mobile-menu-button.open span { background: transparent; }
        .mobile-menu-button.open span::before { transform: rotate(45deg) translate(2px, 2px); }
        .mobile-menu-button.open span::after { transform: rotate(-45deg) translate(2px, -2px); }

        @media (max-width: 900px) {
          .mobile-menu-button { display: inline-flex; }
          .header-nav { display: none; position: absolute; top: 64px; left: 0; right: 0; background: rgba(255,255,255,0.97); padding: 16px 24px 20px; flex-direction: column; gap: 10px; box-shadow: 0 20px 40px rgba(0,0,0,0.12); z-index: 55; }
          .header-nav.open { display: flex; }
          .header-nav .nav-btn { width: 100%; text-align: left; padding: 10px 0; }
          .header-nav .nav-btn::after { left: 0; }
          .nav-btn { font-size: 10px; letter-spacing: 0.08em; }
          .cta-button { width: 100%; justify-content: center; }
        }
      `}</style>

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', flexWrap: 'wrap', gap: '14px' }}>

        {/* Logo + name */}
        <button
          onClick={() => scrollToSection('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <WMLogo size={70} accent="#DC143C" secondary="#1a1a1a" ring="#e8e8e8" />
          {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
              Wilco
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', letterSpacing: '-0.01em' }}>
              Milcinovic.
            </span>
          </div> */}
        </button>

        {/* Mobile menu toggle */}
        <button
          className={`mobile-menu-button${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
        </button>

        {/* Nav */}
        <nav className={`header-nav${menuOpen ? ' open' : ''}`} style={{ alignItems: 'center', gap: '32px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setMenuOpen(false); scrollToSection(item.id) }}
              className={`nav-btn${activeSection === item.id ? ' active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          className="cta-button"
          href="#contact"
          onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection('contact') }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            border: '1px solid #1a1a1a',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            textDecoration: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#DC143C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#DC143C' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.borderColor = '#1a1a1a' }}
        >
          Reach out
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '12px', height: '12px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>

      </div>
    </header>
  )
}

export default Header