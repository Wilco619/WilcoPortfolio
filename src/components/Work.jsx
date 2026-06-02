import React, { useState } from 'react'

const workExperience = [
  {
    id: 1,
    number: '01',
    position: 'IT Help-desk Assistant',
    company: 'French School Nairobi',
    location: 'Nairobi, Yaya Center',
    duration: '3 June 2025 — Present',
    type: 'Full-time',
    description: 'Provided ICT support across the school campus by installing and configuring hardware, software, network devices, and communication systems while assisting staff and students with technical issues.',
    highlights: [
      'Installed software and connected wireless devices to the institutional network.',
      'Configured landlines and pulled CAT6 cabling to expand wired and wireless connectivity.',
      'Maintained projectors, whiteboards, Zoom rooms, sound systems, and event ICT setups.',
      'Managed Google Workspace email for staff and students, and backed up critical data.',
      'Created and maintained an ICT configuration database for hardware, software, and network assets.',
    ],
  },
  {
    id: 2,
    number: '02',
    position: 'Customer Service',
    company: 'French School Nairobi Canteen',
    location: 'Nairobi, Yaya Center',
    duration: '8 May 2024 — 20 Feb 2025',
    type: 'Part-time',
    description: 'Delivered exceptional customer service in a busy school canteen, supporting students, staff, and visitors while maintaining hygiene, order management, and guest satisfaction.',
    highlights: [
      'Welcomed and assisted patrons while enforcing dining area safety and sanitation rules.',
      'Managed order flow, inventory restocking, and meal delivery during peak periods.',
      'Collaborated with kitchen staff to ensure timely meal preparation and event support.',
      'Maintained a clean, organized dining environment and adhered to hygiene standards.',
      'Provided attentive service and handled special requests with empathy and focus.',
    ],
  },
  {
    id: 3,
    number: '03',
    position: 'Data Analyst (Part Time)',
    company: 'Centivo Technologies',
    location: 'Nairobi, Bazaar Plaza',
    duration: '13 May 2023 — 25 Aug 2024',
    type: 'Part-time',
    description: 'Collected, cleaned, validated, and analyzed business datasets to generate actionable insights and support data-driven decision making across departments.',
    highlights: [
      'Extracted and transformed complex datasets from multiple sources using Python and SQL.',
      'Built visualizations and reports with Pandas, NumPy, Matplotlib, and Excel.',
      'Applied statistical methods to support predictive analytics and business recommendations.',
      'Communicated technical findings clearly to non-technical stakeholders.',
      'Collaborated with cross-functional teams to drive data-informed process improvements.',
    ],
  },
  {
    id: 4,
    number: '04',
    position: 'Intern',
    company: 'Techcrast Software Solutions',
    location: 'Karen, Tana House',
    duration: '8 May 2023 — 27 July 2023',
    type: 'Internship',
    description: 'Supported software and network engineering activities while gaining hands-on experience with Django, React.js, MySQL, and payment integration workflows.',
    highlights: [
      'Assisted with system maintenance, network configuration, and infrastructure support.',
      'Worked with Django and React.js to build web application components.',
      'Normalized databases and created complex MySQL queries for application data.',
      'Integrated JSON and XML data transmission for backend workflows.',
      'Implemented STK push payment integration for M-Pesa-enabled web systems.',
    ],
  },
]

const Work = () => {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="w-full min-h-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .work-root { font-family: 'DM Sans', sans-serif; }
        .work-display { font-family: 'Cormorant Garamond', serif; }
        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #DC143C;
        }
        .work-divider { width: 40px; height: 1px; background: #DC143C; margin: 20px 0 28px; }
        .work-row { border-bottom: 1px solid #f0f0f0; cursor: pointer; position: relative; transition: background 0.15s ease; }
        .work-row:first-of-type { border-top: 1px solid #f0f0f0; }
        .work-row:hover { background: #fafafa; }
        .work-row-header { display: grid; grid-template-columns: 56px 1fr auto; align-items: center; padding: 28px 0; gap: 20px; }
        .work-number { font-family: 'Cormorant Garamond', serif; font-size: 13px; font-weight: 400; color: #ccc; letter-spacing: 0.05em; transition: color 0.2s ease; flex-shrink: 0; }
        .work-row.open .work-number, .work-row:hover .work-number { color: #DC143C; }
        .work-position { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 300; color: #1a1a1a; line-height: 1.1; transition: color 0.2s ease; }
        .work-row.open .work-position, .work-row:hover .work-position { color: #DC143C; }
        .work-company { font-size: 12px; font-weight: 400; color: #aaa; margin-top: 4px; letter-spacing: 0.04em; }
        .work-meta-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
        .work-duration { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; color: #595959; text-transform: uppercase; white-space: nowrap; }
        .work-type { font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #585858; border: 1px solid #848383; padding: 2px 8px; }
        .work-chevron { width: 28px; height: 28px; border: 1px solid #ebebeb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ccc; transition: border-color 0.2s ease, color 0.2s ease, transform 0.25s ease; flex-shrink: 0; margin-top: 4px; }
        .work-row.open .work-chevron { border-color: #DC143C; color: #DC143C; transform: rotate(180deg); }
        .work-body { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.4s ease, opacity 0.3s ease; padding: 0 0 0 76px; }
        .work-row.open .work-body { max-height: 1200px; opacity: 1; padding-bottom: 28px; }
        .work-desc { font-size: 14px; color: #666; font-weight: 300; line-height: 1.8; max-width: 680px; margin-bottom: 18px; }
        .work-highlight { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #888; font-weight: 300; line-height: 1.6; margin-bottom: 8px; }
        .work-highlight-dot { width: 5px; height: 5px; border-radius: 50%; background: #DC143C; flex-shrink: 0; margin-top: 7px; }
        .work-location { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: #bbb; font-weight: 400; margin-bottom: 12px; letter-spacing: 0.04em; }
        .work-indicator { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: #DC143C; transform: scaleY(0); transform-origin: top; transition: transform 0.3s ease; }
        .work-row.open .work-indicator { transform: scaleY(1); }
        .work-summary-card { border: 1px solid #f0f0f0; border-radius: 24px; padding: 28px; background: #fafafa; max-width: 860px; margin-bottom: 40px; }
        .work-meta-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 40px; }
        .work-meta-card { border: 1px solid #f0f0f0; border-radius: 20px; padding: 24px; background: #fff; }
        .work-meta-card h3 { margin-bottom: 16px; font-size: 1.05rem; letter-spacing: 0.02em; color: #1a1a1a; font-weight: 500; }
        .work-meta-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; color: #666; font-size: 14px; line-height: 1.75; }
        .work-meta-list strong { color: #333; }
        @media (max-width: 780px) { .work-row-header { grid-template-columns: 1fr auto; } .work-meta-grid { grid-template-columns: 1fr; } .work-body { padding-left: 0; } }
        @media (max-width: 520px) {
          .work-row-header { grid-template-columns: 1fr; gap: 14px; }
          .work-meta-right { align-items: flex-start; }
          .work-duration, .work-type { white-space: normal; }
          .work-row { padding: 20px 0; }
          .work-desc { font-size: 13px; }
          .work-meta-card { padding: 18px; }
          .work-root { padding: 10px 18px 60px; }
        }
      `}</style>

      <div className="work-root" style={{ maxWidth: '1152px', margin: '0 auto', padding: '10px 48px 60px' }}>

        <div className="mb-14">
          {/* <p className="eyebrow" style={{ marginBottom: '20px' }}>Career & experience</p> */}
          <h2 className="work-display" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 300, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '4px' }}>
            Work
          </h2>
          <h2 className="work-display" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 300, fontStyle: 'italic', color: '#DC143C', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            experience.
          </h2>
          <div className="work-divider" />
          <p style={{ fontSize: '15px', color: '#888', fontWeight: 300, maxWidth: '680px', lineHeight: 1.75 }}>
            Results-driven software developer with a strong foundation in full-stack web development, Django back-end systems, data analysis, and customer-focused support.
          </p>
        </div>

        {/* <div className="work-summary-card">
          <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, marginBottom: '18px', fontWeight: 300 }}>
            Results-driven software developer with expertise in full-stack web development and data analysis. Proficient in building robust web applications using Django back-end with JWT authentication and REST APIs, coupled with React.js front-end for enhanced user experiences.
          </p>
          <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, marginBottom: '18px', fontWeight: 300 }}>
            Strong command of data analysis tools including Python libraries (NumPy, Pandas, Matplotlib) and advanced Excel. Demonstrates exceptional problem-solving and analytical capability in delivering efficient technical solutions.
          </p>
          <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.85, fontWeight: 300 }}>
            Portfolio available at <a href="https://wilco619.github.io/React-portfolio/" target="_blank" rel="noreferrer" style={{ color: '#DC143C', textDecoration: 'none' }}>wilco619.github.io/React-portfolio</a> and code samples on <a href="https://github.com/Wilco619" target="_blank" rel="noreferrer" style={{ color: '#DC143C', textDecoration: 'none' }}>GitHub</a>.
          </p>
        </div> */}

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#1a1a1a' }}>Professional experience</h3>
          <p style={{ fontSize: '14px', color: '#777', maxWidth: '760px', fontWeight: 300, lineHeight: 1.75 }}>
            Practical experience from IT support, customer service, and data analysis roles, combined with hands-on internships in software development.
          </p>
        </div>

        <div>
          {workExperience.map((work) => {
            const isOpen = openId === work.id
            return (
              <div key={work.id} className={`work-row${isOpen ? ' open' : ''}`} onClick={() => toggle(work.id)}>
                <div className="work-indicator" />
                <div className="work-row-header">
                  <span className="work-number">{work.number}</span>
                  <div>
                    <div className="work-position">{work.position}</div>
                    <div className="work-company">{work.company}</div>
                  </div>
                  <div className="work-meta-right">
                    <span className="work-duration">{work.duration}</span>
                    <span className="work-type">{work.type}</span>
                    <div className="work-chevron">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '13px', height: '13px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="work-body">
                  <div className="work-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '11px', height: '11px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                    </svg>
                    {work.location}
                  </div>
                  <p className="work-desc">{work.description}</p>
                  <div>
                    {work.highlights.map((h, i) => (
                      <div key={i} className="work-highlight">
                        <span className="work-highlight-dot" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="work-meta-grid">
          <div className="work-meta-card">
            <h3>Education</h3>
            <ul className="work-meta-list">
              <li><strong>Chuka University</strong> — Bachelor of Science, Computer Science<br />Graduated November 22, 2024</li>
              <li><strong>St Antony Dago Kokore</strong> — Kenya Certificate of Secondary Education<br />2016–2019</li>
              <li><strong>Computers for Schools Kenya</strong> — Certificate in Computer Packages<br />20 December 2019</li>
            </ul>
          </div>
          <div className="work-meta-card">
            <h3>Achievements</h3>
            <ul className="work-meta-list">
              <li><strong>Jemsa.co.ke</strong> — built and deployed an e-commerce site with M-Pesa STK push payment integration.</li>
              <li><strong>Tradebells.co.ke</strong> — developed and deployed a catering website with responsive ordering.</li>
              <li><strong>Jacalwellness.co.ke</strong> — created a supplements and wellness website for product promotion.</li>
              <li><strong>React portfolio</strong> — published a static portfolio site using React and Material UI.</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#e8e8e8' }} />
          <p style={{ fontSize: '13px', color: '#bbb', fontWeight: 300, margin: 0 }}>
            Full résumé available on request — <a href="#contact" style={{ color: '#DC143C', textDecoration: 'none', fontWeight: 400 }}>get in touch →</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Work