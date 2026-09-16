import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo">&lt;Sonam's Portfolio/&gt;</a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>

        <button id="theme-toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M12 3a9 9 0 1 0 9 9c0-.4 0-.8-.1-1.2A6.5 6.5 0 0 1 12 3Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="12" y1="1.8" x2="12" y2="4.4" />
                <line x1="12" y1="19.6" x2="12" y2="22.2" />
                <line x1="4.2" y1="4.2" x2="6" y2="6" />
                <line x1="18" y1="18" x2="19.8" y2="19.8" />
                <line x1="1.8" y1="12" x2="4.4" y2="12" />
                <line x1="19.6" y1="12" x2="22.2" y2="12" />
                <line x1="4.2" y1="19.8" x2="6" y2="18" />
                <line x1="18" y1="6" x2="19.8" y2="4.2" />
              </g>
            </svg>
          )}
        </button>

        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
