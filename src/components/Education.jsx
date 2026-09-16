import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <p className="section-sub">My academic journey so far</p>

      <div className="edu-wrap">
        <svg className="edu-art" viewBox="0 0 300 260" aria-hidden="true">
          <rect x="40" y="130" width="180" height="110" rx="6" fill="#132038" />
          <rect x="55" y="145" width="150" height="80" rx="4" fill="#1e3a5c" />
          <rect x="20" y="235" width="220" height="10" rx="5" fill="#0f1b30" />
          <g transform="translate(150,60)">
            <polygon points="0,0 70,25 0,50 -70,25" fill="#4fd1c5" />
            <rect x="-6" y="25" width="12" height="45" fill="#2b8f86" />
          </g>
          <circle cx="60" cy="40" r="4" fill="#5b8def" />
          <circle cx="230" cy="80" r="4" fill="#ffb020" />
          <circle cx="250" cy="150" r="4" fill="#ff7a59" />
        </svg>

        <div className="edu-timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              className="edu-item"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="edu-dot">{item.icon}</div>
              <div className="edu-card">
                <span className="edu-badge">{item.date}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <p className="edu-meta">{item.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
