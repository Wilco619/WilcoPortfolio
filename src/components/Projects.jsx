import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Web Developments',
    description: 'Full-stack web applications with responsive design, secure backends, and user-centric interfaces. Includes e-commerce platforms, catering solutions, and wellness portals with payment integration.',
    tags: ['React', 'Django', 'Bootstrap5', 'Material UI', 'M-Pesa STK'],
    links: [
      { name: 'Jawaka.co.ke', url: 'https://jawaka.co.ke' },
      { name: 'Tradebells.co.ke', url: 'https://tradebells.co.ke' },
      { name: 'Jacalwellness.co.ke', url: 'https://jacalwellness.co.ke' },
    ],
    year: '2024',
  },
  {
    id: 2,
    number: '02',
    title: 'HR Management System',
    description: 'Comprehensive HR solution for employee management, payroll processing, leave tracking, and report generation. Highly scalable and secure, ideal for small to large businesses.',
    tags: ['Django', 'MySQL', 'Bootstrap5'],
    links: [
      { name: 'GitHub', url: 'https://github.com/Wilco619' }
    ],
    year: '2024',
  },
  {
    id: 3,
    number: '03',
    title: 'Library Management System',
    description: 'Automates book borrowing, returns, and catalog management. With a secure backend and user-friendly interface, this system improves library workflows and ensures data accuracy.',
    tags: ['Python', 'Django'],
    links: [
      { name: 'GitHub', url: 'https://github.com/Wilco619' }
    ],
    year: '2024',
  },
  {
    id: 4,
    number: '04',
    title: 'Microfinance System',
    description: 'Streamlines loan applications, approvals, customer management, and financial tracking. Integrates Material UI for elegant UX and React for fast, dynamic interface.',
    tags: ['React', 'Axios', 'Django REST', 'Material UI'],
    links: [
      { name: 'GitHub', url: 'https://github.com/Wilco619' }
    ],
    year: '2024',
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
)

const Projects = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="w-full h-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-root { font-family: 'DM Sans', sans-serif; }
        .proj-display { font-family: 'Cormorant Garamond', serif; }

        .proj-row {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: start;
          padding: 32px 0;
          border-bottom: 1px solid #f0f0f0;
          gap: 24px;
          cursor: pointer;
          transition: background 0.2s ease;
          position: relative;
        }
        .proj-row:first-of-type { border-top: 1px solid #f0f0f0; }

        .proj-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          color: #ccc;
          letter-spacing: 0.05em;
          padding-top: 4px;
          transition: color 0.2s ease;
        }
        .proj-row:hover .proj-number { color: #DC143C; }

        .proj-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.1;
          letter-spacing: '-0.01em';
          transition: color 0.2s ease;
        }
        .proj-row:hover .proj-title { color: #DC143C; }

        .proj-desc {
          font-size: 13px;
          color: #888;
          font-weight: 300;
          line-height: 1.7;
          margin-top: 10px;
          max-width: 560px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease;
        }
        .proj-row:hover .proj-desc {
          max-height: 120px;
          opacity: 1;
          margin-top: 10px;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease;
        }
        .proj-row:hover .proj-tags {
          max-height: 80px;
          opacity: 1;
          margin-top: 12px;
        }

        .proj-tag {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: #999;
          border: 1px solid #ebebeb;
          padding: 3px 10px;
        }

        .proj-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          padding-top: 4px;
          flex-shrink: 0;
        }

        .proj-year {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #ccc;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .proj-row:hover .proj-year { color: #aaa; }

        .proj-arrow {
          width: 36px;
          height: 36px;
          border: 1px solid #ebebeb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }
        .proj-row:hover .proj-arrow {
          border-color: #DC143C;
          color: #DC143C;
          background: #fff5f7;
          transform: rotate(45deg);
        }

        .proj-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #DC143C;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.3s ease;
        }
        .proj-row:hover .proj-indicator { transform: scaleY(1); }

        @media (max-width: 840px) {
          .proj-row { grid-template-columns: 1fr; gap: 16px; }
          .proj-meta { align-items: flex-start; }
          .proj-row:hover .proj-desc { max-height: none; opacity: 1; margin-top: 10px; }
          .proj-row:hover .proj-tags { max-height: none; opacity: 1; margin-top: 10px; }
          .proj-arrow { margin-top: 10px; }
          .proj-number { font-size: 12px; }
          .proj-title { font-size: 1.6rem; }
        }
        @media (max-width: 640px) {
          .proj-root { padding: 10px 20px 0; }
          .proj-title { font-size: 1.4rem; }
          .proj-desc { font-size: 12px; max-width: 100%; }
          .proj-tag { font-size: 10px; padding: 4px 8px; }
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #DC143C;
        }
        .about-divider { width: 40px; height: 1px; background: #DC143C; margin: 20px 0 28px; }
      `}</style>

      <div className="proj-root" style={{ maxWidth: '1152px', margin: '0 auto', padding: '10px 48px 0' }}>

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow" style={{ marginBottom: '20px' }}></p>
          <h2 className="proj-display" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '4px' }}>
            Things I've
          </h2>
          <h2 className="proj-display" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            built.
          </h2>
          <div className="about-divider" />
          <p style={{ fontSize: '15px', color: '#888', fontWeight: 300, maxWidth: '480px', lineHeight: 1.75 }}>
            A curated selection of projects spanning full-stack development, design systems, and data-driven interfaces.
          </p>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              className="proj-row"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ textDecoration: 'none' }}
            >
              <div className="proj-indicator" />

              {/* Number */}
              <span className="proj-number">{project.number}</span>

              {/* Body */}
              <div>
                <div className="proj-title">{project.title}</div>
                <div className="proj-desc">{project.description}</div>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
                {project.links && (
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {project.links.map((linkItem) => (
                      <a
                        key={linkItem.name}
                        href={linkItem.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: '12px',
                          color: '#DC143C',
                          textDecoration: 'none',
                          fontWeight: 400,
                          borderBottom: '1px solid #DC143C',
                          paddingBottom: '2px',
                        }}
                      >
                        {linkItem.name}
                      </a>
                    ))}
                  </div>
                )}
                {project.link && (
                  <div style={{ marginTop: '12px' }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: '12px',
                        color: '#DC143C',
                        textDecoration: 'none',
                        fontWeight: 400,
                        borderBottom: '1px solid #DC143C',
                        paddingBottom: '2px',
                      }}
                    >
                      GitHub Repository →
                    </a>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="proj-meta">
                <span className="proj-year">{project.year}</span>
                <a
                  href={project.link || '#'}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="proj-arrow">
                    <ArrowIcon />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#e8e8e8' }} />
          <p style={{ fontSize: '13px', color: '#bbb', fontWeight: 300 }}>
            More projects available on{' '}
            <a href="https://github.com/Wilco619" target="_blank" rel="noreferrer" style={{ color: '#DC143C', textDecoration: 'none', fontWeight: 400 }}>GitHub →</a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Projects