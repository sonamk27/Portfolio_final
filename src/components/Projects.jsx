import { motion } from 'framer-motion';
import ProjectBanner from './ProjectBanner';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">Things I've designed, engineered, and shipped</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-banner">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-banner-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              <ProjectBanner variant={project.banner} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
