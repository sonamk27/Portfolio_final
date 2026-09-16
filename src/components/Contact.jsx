import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import avatarImg from '../assets/avatar.png';

export default function Contact() {
  const roleLine = profile.roles.join(' · ');

  return (
    <section id="contact" className="section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Left column ── */}
        <div className="contact-left">
          <span className="contact-eyebrow">Contact Me</span>

          <h2 className="contact-name">{profile.fullName}</h2>

          <p className="contact-role">{roleLine}</p>

          <p className="contact-bio">{profile.bio}</p>

          <div className="contact-divider" />

          {/* Social icon buttons */}
          <div className="contact-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"
                />
              </svg>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>

            <a
              href={profile.linktree}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linktree"
              className="contact-icon-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <g
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="2.5" x2="12" y2="21.5" />
                  <line x1="4.2" y1="6.75" x2="19.8" y2="17.25" />
                  <line x1="19.8" y1="6.75" x2="4.2" y2="17.25" />
                </g>
              </svg>
            </a>
          </div>

          {/* CTA button */}
          <a
            href={profile.resume}
            className="contact-resume-btn"
            download
            id="contact-resume-download"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 3a1 1 0 0 1 1 1v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V4a1 1 0 0 1 1-1zM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* ── Right column ── */}
        <div className="contact-right">
          <div className="avatar-wrap">
            <div className="avatar-glow" />
            <img className="avatar" src={avatarImg} alt="Sonam Korade" />
          </div>
          <p className="status">
            <span className="dot" />
            Open to opportunities
          </p>
        </div>
      </motion.div>
    </section>
  );
}
