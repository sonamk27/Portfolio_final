export default function ProjectBanner({ variant }) {
  if (variant === 'maitri') {
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0b1533" />
            <stop offset="1" stopColor="#233a8a" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#pg1)" />
        <circle cx="330" cy="40" r="26" fill="#ffe9a8" />
        <circle cx="60" cy="150" r="70" fill="#16225c" opacity="0.6" />
        <g transform="translate(160,80)">
          <ellipse cx="0" cy="40" rx="50" ry="14" fill="#0e1a44" />
          <rect x="-28" y="-20" width="56" height="60" rx="18" fill="#e7ecff" />
          <circle cx="0" cy="-40" r="26" fill="#e7ecff" />
          <rect x="-10" y="-48" width="20" height="10" rx="4" fill="#7cc7ff" />
          <circle cx="0" cy="-40" r="26" fill="none" stroke="#9fb4ff" strokeWidth="2" />
        </g>
        <g stroke="#7cc7ff" strokeWidth="2" fill="none" opacity="0.8">
          <path d="M60 60 q20 -10 40 0" />
          <path d="M60 70 q20 -6 40 4" />
        </g>
      </svg>
    );
  }

  if (variant === 'viraat') {
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0d2b24" />
            <stop offset="1" stopColor="#0f5c48" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#pg2)" />
        <g stroke="#57e0b8" strokeWidth="1.4" opacity="0.55">
          <line x1="0" y1="40" x2="400" y2="40" />
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="120" x2="400" y2="120" />
          <line x1="0" y1="160" x2="400" y2="160" />
          <line x1="80" y1="0" x2="80" y2="200" />
          <line x1="160" y1="0" x2="160" y2="200" />
          <line x1="240" y1="0" x2="240" y2="200" />
          <line x1="320" y1="0" x2="320" y2="200" />
        </g>
        <polyline
          points="20,170 90,110 160,140 230,60 300,90 380,30"
          fill="none"
          stroke="#ffd166"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="230" cy="60" r="6" fill="#fff" />
      </svg>
    );
  }

  if (variant === 'privacy') {
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pg3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2a123f" />
            <stop offset="1" stopColor="#5a1e8f" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#pg3)" />
        <g transform="translate(200,100)">
          <path
            d="M0 -55 L48 -35 L48 15 Q48 55 0 70 Q-48 55 -48 15 L-48 -35 Z"
            fill="#c9a3ff"
            opacity="0.15"
            stroke="#d9b8ff"
            strokeWidth="2"
          />
          <circle cx="0" cy="-5" r="16" fill="none" stroke="#e8d4ff" strokeWidth="3" />
          <circle cx="0" cy="-5" r="5" fill="#e8d4ff" />
          <path d="M-9 5 q9 -8 18 0" fill="none" stroke="#e8d4ff" strokeWidth="3" />
        </g>
        <rect x="30" y="30" width="60" height="40" rx="6" fill="#ffffff" opacity="0.08" />
        <rect x="310" y="130" width="60" height="40" rx="6" fill="#ffffff" opacity="0.08" />
      </svg>
    );
  }

  if (variant === 'ui-fixer') {
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pg4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0e1f3d" />
            <stop offset="1" stopColor="#1c4c8a" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#pg4)" />
        <rect x="40" y="40" width="150" height="100" rx="10" fill="#0b1830" stroke="#4f9dff" strokeWidth="2" opacity="0.9" />
        <rect x="56" y="56" width="118" height="10" rx="3" fill="#4f9dff" opacity="0.5" />
        <rect x="56" y="76" width="80" height="8" rx="3" fill="#ff6b6b" opacity="0.85" />
        <rect x="56" y="94" width="100" height="8" rx="3" fill="#3ddc97" opacity="0.85" />
        <rect x="56" y="112" width="60" height="8" rx="3" fill="#4f9dff" opacity="0.6" />
        <g transform="translate(230,50)">
          <circle cx="60" cy="45" r="42" fill="none" stroke="#ffd166" strokeWidth="3" opacity="0.9" />
          <path d="M60 25 v20 M60 55 v6" stroke="#ffd166" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="45" r="42" fill="#ffd166" opacity="0.06" />
        </g>
        <path d="M120 140 l16 16 30 -34" fill="none" stroke="#3ddc97" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === 'studymate') {
    return (
      <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pg5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0c2b2e" />
            <stop offset="1" stopColor="#12665f" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#pg5)" />
        <rect x="34" y="34" width="180" height="60" rx="16" fill="#e7fff9" opacity="0.95" />
        <rect x="50" y="50" width="120" height="8" rx="4" fill="#12665f" opacity="0.5" />
        <rect x="50" y="66" width="90" height="8" rx="4" fill="#12665f" opacity="0.35" />
        <rect x="190" y="106" width="176" height="60" rx="16" fill="#57e0c8" opacity="0.9" />
        <rect x="206" y="122" width="120" height="8" rx="4" fill="#0c2b2e" opacity="0.55" />
        <rect x="206" y="138" width="80" height="8" rx="4" fill="#0c2b2e" opacity="0.4" />
        <g stroke="#8ff0da" strokeWidth="2" opacity="0.6" fill="none">
          <circle cx="330" cy="40" r="5" />
          <circle cx="350" cy="55" r="3" />
          <circle cx="34" cy="150" r="4" />
        </g>
      </svg>
    );
  }

  return null;
}
