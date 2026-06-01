import React from 'react'
import portrait from '../assets/img/0V7A0528F.jpg'
import chukaLogo from '../assets/img/chuka-logo.jpg'
import { FaDatabase, FaChartBar, FaGithub, FaCertificate } from 'react-icons/fa'
import { TbFileExcel } from 'react-icons/tb'
import { IoLogoTableau } from 'react-icons/io5'
import { VscVscode } from 'react-icons/vsc'
import { SiReact, SiNodedotjs, SiTypescript, SiNextdotjs, SiPostgresql, SiMui, SiBootstrap, SiGoogle, SiOpenai, SiTailwindcss, SiPython, SiGit, SiLinux, SiDjango, SiCpanel, SiStackoverflow, SiCisco } from 'react-icons/si'

const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '7+', label: 'Projects delivered' },
  // { value: '20+', label: 'Happy clients' },
]

const skills = [
  { label: 'React', Icon: SiReact },
  { label: 'Node.js', Icon: SiNodedotjs },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Next.js', Icon: SiNextdotjs },
  { label: 'SQL', Icon: FaDatabase },
  { label: 'Excel', Icon: TbFileExcel },
  { label: 'Power BI', Icon: FaChartBar },
  { label: 'Tableau', Icon: IoLogoTableau },
  { label: 'VS Code', Icon: VscVscode },
  { label: 'Material UI', Icon: SiMui },
  { label: 'Bootstrap 5', Icon: SiBootstrap },
  { label: 'Google Worksuite', Icon: SiGoogle },
  { label: 'cPanel', Icon: SiCpanel },
  { label: 'Stack Overflow', Icon: SiStackoverflow },
  { label: 'Claude AI', Icon: SiOpenai },
  { label: 'PostgreSQL', Icon: SiPostgresql },
  { label: 'Tailwind CSS', Icon: SiTailwindcss },
  { label: 'Python', Icon: SiPython },
  { label: 'Git', Icon: SiGit },
  { label: 'GitHub', Icon: FaGithub },
  { label: 'Linux', Icon: SiLinux },
  { label: 'Django', Icon: SiDjango },
]

const certifications = [
  { title: 'AWS Certified Solutions Architect – Associate', issuer: 'AWS', year: '2024', Icon: FaCertificate },
  { title: 'Google Data Analytics Certificate', issuer: 'Google', year: '2023', Icon: SiGoogle },
  { title: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', year: '2025', Icon: SiCisco },
  { title: 'B.Sc. Computer Science', issuer: 'Chuka University', year: '2024', Logo: chukaLogo },
]

const About = () => {
  return (
    <section className="w-full bg-white" style={{ paddingTop: '10px', paddingBottom: '24px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root { font-family: 'DM Sans', sans-serif; }
        .about-grid { display: grid; grid-template-columns: 1fr 280px; gap: 28px; align-items: center; }
        .about-photo-panel { display: flex; justify-content: flex-end; }
        .about-display { font-family: 'Cormorant Garamond', serif; }
        .about-divider { width: 40px; height: 1px; background: #DC143C; }
        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border: 1px solid #e8e8e8;
          font-size: 11px;
          font-weight: 400;
          color: #555;
          letter-spacing: 0.04em;
          transition: border-color 0.2s ease, color 0.2s ease;
          cursor: default;
        }
        .skill-tag svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .skill-tag:hover { border-color: #DC143C; color: #DC143C; }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          margin-top: 4px;
        }
        .photo-frame {
          position: relative;
          width: 100%;
          max-width: 280px;
          // aspect-ratio: 3 / 4;
          overflow: hidden;
          margin: 0 auto;
        }
        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.6s ease;
        }
        .photo-frame:hover img { transform: scale(1.03); }
        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #DC143C;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 900px) {
          .about-root { padding: 10px 20px 0; }
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
          .about-photo-panel { justify-content: center; }
          .photo-frame { max-width: 100%; width: 100%; }
          .photo-frame img { height: auto; }
          .stat-value { font-size: 1.9rem; }
          .skill-tag { flex: 1 1 140px; }
          .work-meta-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .about-root { padding: 10px 16px 0; }
          .about-display { font-size: clamp(2.2rem, 9vw, 3.6rem); }
          .stat-value { font-size: 1.6rem; }
          .skill-tag { padding: 8px 10px; }
        }
      `}</style>

      <div className="about-root" style={{ maxWidth: '1152px', margin: '0 auto', padding: '10px 32px 0', width: '100%' }}>
        <div className="about-grid">

          {/* LEFT — Text */}
          <div className="flex flex-col">

            <p className="eyebrow" style={{ marginBottom: '20px' }}></p>

            <h2 className="about-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '4px' }}>
              Crafting digital
            </h2>
            <h2 className="about-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
              experiences.
            </h2>

            <div className="about-divider" style={{ margin: '28px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px' }}>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                I'm a passionate full-stack developer with expertise in modern web technologies. With a strong foundation in React, Node.js, and various databases, I create responsive and user-friendly applications that leave a lasting impression.
              </p>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
                My journey started with curiosity about how the web works. Over the years I've honed my skills through projects and collaborations — writing clean, maintainable code while staying current with industry trends and best practices.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '28px', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f0f0f0', flexWrap: 'wrap' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ marginTop: '36px' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '14px' }}>
                Tech stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill) => (
                  <span key={skill.label} className="skill-tag">
                    <skill.Icon />
                    {skill.label}
                  </span>
                ))}
              </div>

              {/* Certifications */}
              <div style={{ marginTop: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '12px' }}>
                  Certifications
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  {certifications.map((c) => (
                      <div key={c.title} style={{ border: '1px solid #f0f0f0', padding: '10px', borderRadius: '8px', background: '#fff', display: 'flex', gap: '12px', alignItems: 'center' }}>
                        {c.Icon && (
                          <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, background: '#fafafa', flexShrink: 0 }}>
                            <c.Icon />
                          </div>
                        )}
                        {c.Logo && (
                          <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: '#fafafa', flexShrink: 0, overflow: 'hidden' }}>
                            <img src={c.Logo} alt={`${c.issuer} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        )}
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>{c.title}</div>
                          <div style={{ fontSize: '12px', color: '#666', marginTop: '6px' }}>{c.issuer} • {c.year}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT — Photo */}
          <div className="about-photo-panel" style={{ position: 'relative', padding: '0 0 24px 0', marginLeft: 'auto', width: '280px', maxWidth: '280px' }}>

            {/* Background depth rectangle */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              right: '-8px',
              bottom: '-8px',
              border: '1px solid #f0f0f0',
              zIndex: 0,
            }} />

            <div className="photo-frame" style={{ position: 'relative', zIndex: 1, width: '280px', maxWidth: '280px' }}>
              {/* Replace src with your actual photo */}
              <img
                src={portrait}
                alt="Wilco Milcinovic"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(220,20,60,0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Accent lines */}
            <div style={{ position: 'absolute', top: '20px', right: '-12px', width: '2px', height: '60%', background: '#DC143C', zIndex: 2 }} />
            <div style={{ position: 'absolute', bottom: '-12px', left: '20px', height: '2px', width: '50%', background: '#DC143C', zIndex: 2 }} />

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: '48px',
              left: '-20px',
              background: '#fff',
              border: '1px solid #e8e8e8',
              padding: '12px 20px',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0, animation: 'pulse-dot 2s infinite' }} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '0.04em', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif" }}>
                Available for projects
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
