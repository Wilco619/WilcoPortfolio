import React, { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    name: 'X / Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/254718679186',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.112.552 4.08 1.512 5.856L0 24l6.312-1.488A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.192-1.248-6.192-3.48-8.52zM12 21.6c-1.2 0-2.376-.312-3.432-.9l-.246-.138-3.756.888.9-3.672-.15-.246A9.6 9.6 0 0 1 2.4 12c0-5.292 4.308-9.6 9.6-9.6 2.56 0 4.92.996 6.708 2.784A9.552 9.552 0 0 1 21.6 12c0 5.292-4.308 9.6-9.6 9.6z" />
        <path d="M17.22 14.364c-.288-.144-1.704-.84-1.968-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-1.704-.84-2.82-1.56-3.948-3.552-.3-.516.3-.48.864-1.584.096-.24.048-.456-.024-.624-.072-.168-.648-1.56-.888-2.136-.236-.576-.476-.5-.648-.5-.168 0-.36 0-.552 0-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.016 3.072 4.896 4.296 2.88 1.224 2.88.816 3.396.768.516-.048 1.68-.672 1.92-1.32.24-.648.24-1.2.168-1.32-.072-.12-.264-.192-.552-.336z" />
      </svg>
    )
  }
]

const contactDetails = [
  {
    label: 'Email',
    value: 'wmilcinovic01@gmail.com',
    href: 'mailto:wmilcinovic01@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  },
  {
    label: 'Phone',
    value: '+254 (718) 679-186',
    href: 'tel:+254718679186',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.09１-.85２H4.５A２.２５ ２.２５ ０ ０ ０ ２.２５ ４.５v２.２５z" />
      </svg>
    )
  },
  {
    label: 'Based in',
    value: 'Nairobi, Kenya',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
      </svg>
    )
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="w-full h-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
        }
        .contact-display {
          font-family: 'Cormorant Garamond', serif;
        }
        .field-input {
          width: 100%;
          padding: 12px 0;
          border: none;
          border-bottom: 1px solid #e2e2e2;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.25s ease;
        }
        .field-input::placeholder {
          color: #b0b0b0;
          font-weight: 300;
        }
        .field-input:focus {
          border-bottom-color: #DC143C;
        }
        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 2px;
        }
        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #1a1a1a;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .submit-btn:hover {
          background: #DC143C;
        }
        .submit-btn:active {
          transform: scale(0.98);
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          color: #888;
          border: 1px solid #e8e8e8;
          border-radius: 50%;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          text-decoration: none;
        }
        .social-link:hover {
          color: #DC143C;
          border-color: #DC143C;
          background: #fff5f7;
        }
        .contact-detail-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          transition: color 0.2s ease;
        }
        .contact-detail-link:hover {
          color: #DC143C;
        }
        .divider {
          width: 40px;
          height: 1px;
          background: #DC143C;
          margin: 20px 0;
        }
        .availability-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .success-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 0;
          color: #22c55e;
          font-size: 13px;
          font-weight: 500;
          border-top: 1px solid #f0fdf4;
          animation: fade-in 0.4s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .contact-root { padding: 10px 20px 0; }
          .contact-display { font-size: clamp(2.4rem, 10vw, 4.5rem); }
          .contact-grid { gap: 20px; }
          .contact-detail-link { gap: 12px; }
          .submit-btn { width: 100%; justify-content: center; }
        }
        @media (max-width: 640px) {
          .contact-root { padding: 10px 16px 0; }
          .contact-display { font-size: clamp(2rem, 10vw, 3.8rem); }
          .contact-grid { grid-template-columns: 1fr; gap: 22px; }
        }
      `}</style>

      <div className="contact-root" style={{ maxWidth: '1152px', margin: '0 auto', padding: '10px 48px 48px' }}>

        {/* Page heading */}
        <div className="mb-16">
          <p className="field-label mb-4" style={{ color: '#DC143C' }}></p>
          <h1 className="contact-display" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Let's work<br />
            <span style={{ fontStyle: 'italic', color: '#DC143C' }}>together.</span>
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 contact-grid">

          {/* LEFT — Sidebar */}
          <aside className="lg:col-span-2 flex flex-col gap-10">

            {/* Intro */}
            <div>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.75, fontWeight: 300 }}>
                Whether you have a project in mind, want to collaborate, or simply want to say hello — my inbox is always open.
              </p>
              <div className="divider" />
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <a key={item.label} href={item.href} className="contact-detail-link">
                  <span style={{ color: '#DC143C', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1px', fontWeight: 500 }}>{item.label}</p>
                    <p style={{ fontSize: '14px', color: '#333', fontWeight: 400 }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{ padding: '20px', background: '#fafafa', borderLeft: '2px solid #DC143C' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="availability-dot" />
                <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1a1a' }}>Available for projects</span>
              </div>
              <p style={{ fontSize: '13px', color: '#888', fontWeight: 300, lineHeight: 1.6 }}>
                I typically respond within 24–48 hours. Currently accepting new freelance & full-time opportunities.
              </p>
            </div>

            {/* Social icons */}
            <div>
              <p className="field-label" style={{ marginBottom: '12px' }}>Find me on</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} className="social-link" title={s.name} target="_blank" rel="noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </aside>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="field-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="field-input"
                />
              </div>

              <div className="mb-10">
                <label className="field-label">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  className="field-input"
                  style={{ resize: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <button type="submit" className="submit-btn">
                  Send message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>

                {submitted && (
                  <div className="success-bar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Message sent — I'll be in touch soon.
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact