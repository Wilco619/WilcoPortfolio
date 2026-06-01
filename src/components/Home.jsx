import React, { useEffect, useState } from 'react'
import portrait from '../assets/img/0V7A0529D.png'

const roles = ['Full-Stack Developer', 'Creative Thinker', 'Data Analyst', 'Networking Enthusiast', 'Cybersecurity Analyst']

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [charIndex, typing, roleIndex])

  return (
    <section className="w-full min-h-full bg-white relative overflow-visible flex items-start">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .home-root { font-family: 'DM Sans', sans-serif; padding: 10px 48px 0; }
        .home-display { font-family: 'Cormorant Garamond', serif; }

        .home-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .home-watermark {
          position: absolute;
          right: -2vw;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(260px, 30vw, 420px);
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px #f0f0f0;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #DC143C;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .scroll-hint {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #bbb;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .scroll-hint:hover { color: #DC143C; }
        .scroll-line {
          width: 40px;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .scroll-hint:hover .scroll-line { width: 60px; }

        .availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888;
          border: 1px solid #ebebeb;
          padding: 8px 16px;
          margin-bottom: 40px;
        }
        .avail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #1a1a1a;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #1a1a1a;
          transition: background 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .cta-primary:hover { background: #DC143C; border-color: #DC143C; }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          color: #1a1a1a;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid #e8e8e8;
          transition: border-color 0.2s ease, color 0.2s ease;
          cursor: pointer;
        }
        .cta-secondary:hover { border-color: #DC143C; color: #DC143C; }

        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .stat-lbl {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #bbb;
          margin-top: 4px;
        }

        /* ── Photo frame ── */
        .photo-frame-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          flex-shrink: 0;
        }

        /* Back rectangle: 45° crimson ghost */
        .photo-rect-back {
          position: absolute;
          inset: 0;
          border: 1.5px solid #DC143C;
          transform: rotate(45deg);
          opacity: 0.3;
        }

        /* Front rectangle: 30° — clips the image */
        .photo-rect-front {
          position: absolute;
          inset: 15px;
          transform: rotate(30deg);
          overflow: hidden;
          border: 1.5px solid #1a1a1a;
        }

        /* Image counter-rotates -30° inside the clipping rect so it stays upright */
        .photo-rect-front img {
          position: absolute;
          /* 
            To stay upright inside a rotated container we counter-rotate.
            We also need to enlarge so the corners don't show white gaps
            after the counter-rotation — scale(1.5) covers the full rect
            at 30° tilt comfortably.
          */
          top: 65%;
          left: 60%;
          width: 150%;
          height: 150%;
          transform: translate(-50%, -50%) rotate(-30deg);
          object-fit: contain;
          object-position: top center;
          transition: transform 0.5s ease;
        }
        
        .photo-rect-front img.backdrop {
          filter: blur(10px);
          z-index: 1;
          opacity: 0.6;
        }
        
        .photo-rect-front img.main {
          z-index: 2;
        }
        
        .photo-frame-wrapper:hover .photo-rect-front img.main {
          transform: translate(-50%, -50%) rotate(-30deg) scale(1.06);
        }

        .photo-dot {
          position: absolute;
          bottom: 6px;
          left: 2px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #DC143C;
          opacity: 0.6;
        }

        .home-main-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
          min-height: 100vh;
          padding-top: 0px;
          padding-bottom: 40px;
        }
        .home-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          align-self: stretch;
          padding-top: 0px;
          padding-bottom: 48px;
          gap: 40px;
        }
        .home-side-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ddd;
          user-select: none;
        }
        .home-side .scroll-hint { writing-mode: vertical-rl; transform: rotate(180deg); }

        @media (max-width: 900px) {
          .home-root { padding: 10px 20px 0; }
          .home-grid { background-size: 24px 24px; }
          .home-watermark { font-size: clamp(160px, 30vw, 260px); right: -6vw; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
          .scroll-hint { font-size: 10px; }
          .home-main-grid { grid-template-columns: 1fr; gap: 32px; padding-top: 40px; }
          .home-side { align-items: center; padding-top: 0; padding-bottom: 0; }
          .home-side-label { display: none; }
          .photo-frame-wrapper {
            width: min(320px, 75vw);
            height: min(320px, 75vw);
            margin: 0 auto;
            min-height: 280px;
          }
          .photo-rect-front { inset: 10px; }
          .home-side .scroll-hint { writing-mode: horizontal-tb; transform: none; }
        }
        @media (max-width: 640px) {
          .home-root { padding: 10px 16px 0; }
          .home-watermark { font-size: clamp(120px, 40vw, 220px); right: -10vw; }
          .scroll-hint { gap: 8px; font-size: 10px; }
          .photo-frame-wrapper { width: min(280px, 85vw); }
          .home-main-grid { padding-top: 28px; }
        }
      `}</style>

      <div className="home-grid" />
      <div className="home-watermark" aria-hidden="true">W</div>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent, #DC143C 40%, transparent)' }} />

      {/* Main content */}
      <div className="home-root home-layout" style={{ position: 'relative', zIndex: 1, maxWidth: '1152px', margin: '0 auto', width: '100%' }}>

        <div className="home-main-grid">

          {/* LEFT — unchanged */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <div className="availability">
              <span className="avail-dot" />
              Available for new projects
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#DC143C', marginBottom: '16px' }}>
              Hello, I'm
            </p>

            <h1 className="home-display" style={{ fontSize: 'clamp(4.5rem, 4vw, 9rem)', fontWeight: 300, color: '#1a1a1a', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '8px' }}>
              Wilco
            </h1>
            <h1 className="home-display" style={{ fontSize: 'clamp(4.5rem, 4vw, 9rem)', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '36px' }}>
              Milcinovic.
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              <div style={{ width: '32px', height: '1px', background: '#DC143C', flexShrink: 0 }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 300, color: '#666', minWidth: '260px' }}>
                {displayed}<span className="cursor" />
              </p>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 300, color: '#999', maxWidth: '420px', lineHeight: 1.75, marginBottom: '44px' }}>
              I build fast, elegant, and purposeful digital experiences — from pixel-perfect interfaces to robust back-end systems.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '64px' }}>
              <button onClick={() => window.__scrollToSection?.('projects')} className="cta-primary">
                View my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
              <button onClick={() => window.__scrollToSection?.('contact')} className="cta-secondary">
                Get in touch
              </button>
            </div>

            {/* <div style={{ display: 'flex', gap: '48px', paddingTop: '32px', borderTop: '1px solid #f0f0f0' }}>
              {[
                { val: '5+', lbl: 'Years exp.' },
                { val: '40+', lbl: 'Projects' },
                { val: '20+', lbl: 'Clients' },
              ].map(s => (
                <div key={s.lbl}>
                  <div className="stat-num">{s.val}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div> */}

          </div>

          {/* RIGHT — vertical label + photo frame + scroll cue */}
          <div className="home-side">

            <div className="home-side-label">
              Portfolio — {currentYear}
            </div>

            {/* ── Double-rectangle photo frame ── */}
            <div className="photo-frame-wrapper">
              {/* Back rect: faint crimson at 45° */}
              <div className="photo-rect-back" />

              {/* Front rect: 30° border, image inside counter-rotated to stay upright */}
              <div className="photo-rect-front">
                {/* Blurred backdrop */}
                <img
                  src={portrait}
                  alt="Wilco Milcinovic backdrop"
                  className="backdrop"
                />
                {/* Sharp main image */}
                <img
                  src={portrait}
                  alt="Wilco Milcinovic"
                  className="main"
                />
              </div>

              <div className="photo-dot" />
            </div>

            <a href="#about" className="scroll-hint" style={{ textDecoration: 'none' }}>
              <span className="scroll-line" />
              Scroll to explore
            </a>

          </div>

        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #f0f0f0 40%, transparent)' }} />
    </section>
  )
}

export default Home