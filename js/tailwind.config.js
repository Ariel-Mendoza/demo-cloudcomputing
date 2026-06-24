// Extensión del tema de Tailwind para clases personalizadas del dashboard
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter:    ['Inter',    'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber-blue':   '#00d4ff',
        'cyber-purple': '#7c3aed',
        'cyber-green':  '#00ff88',
        'cyber-dark':   '#0a0e1a',
        'cyber-card':   '#111827',
        'cyber-border': '#1e2d40',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'scanline':   'scanline 8s linear infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          to:   { textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
};
