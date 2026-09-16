import { motion } from 'framer-motion';
import SkillIcon from './SkillIcon';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-sub">Technologies and tools I build with</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.key}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <SkillIcon name={skill.key} />
            <span>{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
