import { motion } from 'framer-motion';
import { freelance } from '../data/portfolioData';

export default function Freelance() {
  return (
    <section id="freelance" className="section">
      <h2 className="section-title">Freelance</h2>
      <p className="section-sub">What I can build for you</p>

      <span className="freelance-status">
        <span className="dot" />
        {freelance.statusText}
      </span>

      <p className="freelance-intro">{freelance.intro}</p>

      <div className="freelance-grid">
        {freelance.services.map((service, i) => (
          <motion.article
            key={service.title}
            className="freelance-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="freelance-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="project-tags">
              {service.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
