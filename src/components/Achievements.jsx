import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>
      <p className="section-sub">Milestones from national competitions and certifications</p>

      <div className="ach-grid">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            className={`ach-card ${item.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="ach-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p className="ach-org">{item.org}</p>
            <p className="ach-date">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
