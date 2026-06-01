import React from 'react'
import WMLogo from './WMLogo'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = ({ scrollToSection, currentPage }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub,   href: '#', label: 'GitHub'   },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn'  },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), href: '#', label: 'X' },
    { icon: FaEnvelope, href: '#', label: 'Email'     },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.112.552 4.08 1.512 5.856L0 24l6.312-1.488A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.192-1.248-6.192-3.48-8.52zM12 21.6c-1.2 0-2.376-.312-3.432-.9l-.246-.138-3.756.888.9-3.672-.15-.246A9.6 9.6 0 0 1 2.4 12c0-5.292 4.308-9.6 9.6-9.6 2.56 0 4.92.996 6.708 2.784A9.552 9.552 0 0 1 21.6 12c0 5.292-4.308 9.6-9.6 9.6z" />
        <path d="M17.22 14.364c-.288-.144-1.704-.84-1.968-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-1.704-.84-2.82-1.56-3.948-3.552-.3-.516.3-.48.864-1.584.096-.24.048-.456-.024-.624-.072-.168-.648-1.56-.888-2.136-.236-.576-.476-.5-.648-.5-.168 0-.36 0-.552 0-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.016 3.072 4.896 4.296 2.88 1.224 2.88.816 3.396.768.516-.048 1.68-.672 1.92-1.32.24-.648.24-1.2.168-1.32-.072-.12-.264-.192-.552-.336z" />
      </svg>
    ), href: 'https://wa.me/254718679186', label: 'WhatsApp' },
    
  ]

  const navLinks = [
    { id: 'home',     label: 'Home'     },
    { id: 'about',    label: 'About'    },
    { id: 'projects', label: 'Projects' },
    { id: 'work',     label: 'Work'     },
    { id: 'contact',  label: 'Contact'  },
  ]

  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif", background: '#0d0d0d', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #DC143C;
        }
        .footer-display {
          font-family: 'Cormorant Garamond', serif;
        }
        .footer-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #666;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
          position: relative;
          display: inline-block;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #DC143C;
          transition: width 0.25s ease;
        }
        .footer-nav-link:hover { color: #fff; }
        .footer-nav-link:hover::after { width: 100%; }

        .footer-social {
          width: 36px;
          height: 36px;
          border: 1px solid #2a2a2a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
          flex-shrink: 0;
        }
        .footer-social:hover {
          border-color: #DC143C;
          color: #DC143C;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr 1px 160px 1px 160px;
          gap: 64px;
          align-items: start;
          padding-bottom: 64px;
        }
        .footer-root { padding: 80px 48px 0; }
        .footer-column-rule {
          width: 1px;
          background: #1e1e1e;
          align-self: stretch;
        }
        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0 32px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-divider {
          width: 100%;
          height: 1px;
          background: #1e1e1e;
        }

        .footer-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
          opacity: 0.45;
        }

        .footer-ghost {
          position: absolute;
          right: -4vw;
          bottom: -6vh;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(180px, 22vw, 340px);
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px #1a1a1a;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        @media (max-width: 980px) {
          .footer-top-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-column-rule { display: none; }
          .footer-bottom-row { justify-content: flex-start; gap: 14px; }
          .footer-social { width: 34px; height: 34px; }
          .footer-nav-link { font-size: 12px; }
        }
        @media (max-width: 640px) {
          .footer-root { padding: 40px 20px 24px; }
          .footer-eyebrow { font-size: 9px; }
          .footer-display { font-size: 1.1rem; }
          .footer-bottom-row { flex-direction: column; align-items: flex-start; }
          .footer-grid { background-size: 24px 24px; opacity: 0.25; }
          .footer-ghost { display: none; }
          .footer-top-grid { gap: 24px; }
          .footer-social { width: 32px; height: 32px; }
        }
      `}</style>

      {/* Top crimson accent line — matches Home page */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #DC143C 40%, transparent)' }} />

      {/* Grid background */}
      <div className="footer-grid" />

      {/* Ghost watermark */}
      <div className="footer-ghost" aria-hidden="true">W</div>

      <div className="footer-root" style={{ position: 'relative', zIndex: 1, maxWidth: '1152px', margin: '0 auto' }}>

        {/* Top section — brand left, columns right */}
        <div className="footer-top-grid">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <WMLogo size={150} accent="#ffffff" secondary="#d1d1d188" ring="#ffff" />

            {/* <div>
              <p className="footer-display" style={{ fontSize: '2rem', fontWeight: 300, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                Wilco
              </p>
              <p className="footer-display" style={{ fontSize: '2rem', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
                Milcinovic.
              </p>
            </div> */}

            <p style={{ fontSize: '13px', fontWeight: 300, color: '#555', lineHeight: 1.75, maxWidth: '260px' }}>
              Crafting elegant digital experiences with precision, passion, and modern web technologies.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="footer-social">
                  <Icon style={{ width: '14px', height: '14px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Vertical rule 1 */}
          <div className="footer-column-rule" style={{ width: '1px', background: '#1e1e1e', alignSelf: 'stretch' }} />

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="footer-eyebrow">Navigation</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection && scrollToSection(link.id)}
                  className="footer-nav-link"
                  style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Vertical rule 2 */}
          <div className="footer-column-rule" style={{ width: '1px', background: '#1e1e1e', alignSelf: 'stretch' }} />

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="footer-eyebrow">Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Email', value: 'wmilcinovic01@gmail.com', href: 'mailto:wmilcinovic01@gmail.com' },
                { label: 'Phone', value: '+254 (718) 679-186', href: 'tel:+254718679186' },
                { label: 'Based in', value: 'Nairobi, Kenya', href: '#' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', marginBottom: '2px' }}>{item.label}</p>
                  <a href={item.href} style={{ fontSize: '13px', fontWeight: 300, color: '#666', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.target.style.color = '#DC143C'}
                    onMouseLeave={e => e.target.style.color = '#666'}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0, animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#444' }}>Available</span>
            </div>
            <style>{`@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0 32px', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '11px', fontWeight: 300, color: '#3a3a3a', letterSpacing: '0.04em' }}>
            © {currentYear} Wilco Milcinovic. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', fontWeight: 300, color: '#2e2e2e', letterSpacing: '0.04em' }}>
            Built with React &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer