import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter';
import { profile } from '../data/portfolioData';

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="section hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="hero-greeting">Hey, there!</p>
        <h1 className="hero-name">
          I am
          <br />
          <span className="grad-text">
            Sonam
            <br />
            Korade
          </span>
        </h1>
        <p className="hero-role">
          <span>{typed}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a href={profile.resume} className="btn btn-primary" download>
            Download Resume
          </a>
          <a href="#projects" className="btn btn-ghost">
            View Projects
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-art"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="hero-video-glow" />
        <video
          className="hero-video"
          src="/assets/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </section>
  );
}
