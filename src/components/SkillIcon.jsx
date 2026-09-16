const glyphs = {
  react: `<circle cx="12" cy="12" r="2.1" fill="#61dafb"/><g fill="none" stroke="#61dafb" stroke-width="1.4"><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></g>`,
  nodejs: `<path fill="#6cc24a" d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z" opacity=".25"/><path fill="none" stroke="#6cc24a" stroke-width="1.3" d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z"/><text x="12" y="15" text-anchor="middle" font-family="Sora,sans-serif" font-weight="700" font-size="8" fill="#6cc24a">JS</text>`,
  express: `<text x="12" y="15.5" text-anchor="middle" font-family="Sora,sans-serif" font-weight="700" font-size="9" fill="#e9ecf7">Ex</text>`,
  javascript: `<rect x="3" y="3" width="18" height="18" rx="3" fill="#f0db4f"/><text x="12" y="16.5" text-anchor="middle" font-family="Sora,sans-serif" font-weight="800" font-size="9.5" fill="#1a1a1a">JS</text>`,
  html: `<path fill="#e34f26" d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3Z"/><path fill="#fff" d="M12 5v14.2l4.9-1.5L18 6H12Z" opacity=".15"/><text x="12" y="15.5" text-anchor="middle" font-family="Sora,sans-serif" font-weight="800" font-size="7.5" fill="#fff">5</text>`,
  css: `<path fill="#2965f1" d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3Z"/><text x="12" y="15.5" text-anchor="middle" font-family="Sora,sans-serif" font-weight="800" font-size="7.5" fill="#fff">3</text>`,
  python: `<path fill="#3776ab" d="M12 3c-3 0-3.4 1.3-3.4 2.9v1.9h3.5v.6H6.9C5.3 8.4 4 9.4 4 12s1.3 3.6 2.9 3.6H8v-2c0-1.7 1.4-3.1 3.1-3.1h3.6c1.5 0 2.7-1.2 2.7-2.7V5.9C17.4 4.3 16 3 12 3Zm-1.9 1.9c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7Z"/><path fill="#ffd43b" d="M12 21c3 0 3.4-1.3 3.4-2.9v-1.9h-3.5v-.6h5.2c1.6 0 2.9-1 2.9-3.6s-1.3-3.6-2.9-3.6H16v2c0 1.7-1.4 3.1-3.1 3.1H9.3c-1.5 0-2.7 1.2-2.7 2.7v2.9c0 1.6 1.4 2.9 5.4 2.9Zm1.9-1.9c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z"/>`,
  sql: `<ellipse cx="12" cy="6.5" rx="7" ry="2.6" fill="#c9a3ff"/><path fill="#c9a3ff" opacity=".7" d="M5 6.5v5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-5"/><path fill="#c9a3ff" opacity=".45" d="M5 11.5v5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-5"/>`,
  git: `<path fill="#f34f29" d="m20.6 10.9-7.5-7.5a1.4 1.4 0 0 0-2 0l-1.7 1.7 2.1 2.1a1.7 1.7 0 0 1 2.1 1.6c0 .3-.1.6-.2.9l2 2c1-.4 2.2 0 2.8.9.7 1 .4 2.3-.6 3-1 .6-2.3.3-3-.7a2.2 2.2 0 0 1-.1-2.2l-1.9-1.9v5c.3.1.5.3.7.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0-.7-1.8 0-2.5c.2-.2.4-.3.6-.4v-5.1a1.9 1.9 0 0 1-1-2.5L6.9 6.8l-3.5 3.5a1.4 1.4 0 0 0 0 2l7.5 7.5c.6.6 1.5.6 2 0l7.7-7.7c.5-.5.5-1.4 0-2Z"/>`,
  github: `<path fill="#e9ecf7" d="M12 2.3a10 10 0 0 0-3.2 19.4c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.9 1a10 10 0 0 1 5.3 0c2-1.3 2.9-1 2.9-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2.3Z"/>`,
  figma: `<path fill="#f24e1e" d="M9 2h3v5H9a2.5 2.5 0 0 1 0-5Z"/><path fill="#a259ff" d="M9 7h3v5H9a2.5 2.5 0 0 1 0-5Z"/><path fill="#1abcfe" d="M9 12h3v5H9a2.5 2.5 0 0 1 0-5Z"/><circle cx="14.5" cy="9.5" r="2.5" fill="#0acf83"/><path fill="#ff7262" d="M12 2h2.5a2.5 2.5 0 0 1 0 5H12V2Z"/>`,
  rag: `<circle cx="8" cy="8" r="2.6" fill="none" stroke="#8fd3ff" stroke-width="1.4"/><circle cx="16" cy="8" r="2.6" fill="none" stroke="#8fd3ff" stroke-width="1.4"/><circle cx="12" cy="16" r="2.6" fill="none" stroke="#8fd3ff" stroke-width="1.4"/><path stroke="#8fd3ff" stroke-width="1.2" d="M9.9 9.5 11 14M14.1 9.5 13 14M10 8h4"/>`,
};

export default function SkillIcon({ name }) {
  const markup = glyphs[name] || '';
  return (
    <svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
