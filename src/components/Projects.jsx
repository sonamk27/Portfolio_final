import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectBanner from './ProjectBanner';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => setFlippedId((prev) => (prev === id ? null : id));

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip(id);
    }
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">Things I've designed, engineered, and shipped</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className={`project-card ${flippedId === project.id ? 'is-flipped' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => handleFlip(project.id)}
            onKeyDown={(e) => handleKeyDown(e, project.id)}
            role="button"
            tabIndex={0}
            aria-pressed={flippedId === project.id}
          >
            <div className="flip-inner">
              {/* Front face */}
              <div className="flip-face flip-front">
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
                  <div className="project-links">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    ) : null}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back face */}
              <div className="flip-face flip-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
