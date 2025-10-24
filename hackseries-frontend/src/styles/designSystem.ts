// CollabChain Design System
// Premium Purple/Pink Theme with Glassmorphism

export const colors = {
  // Purple shades
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  
  // Pink shades
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  
  // Orange accent
  orange: {
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
  },
  
  // Neutral
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  }
};

export const gradients = {
  // Primary gradient (Purple → Pink)
  primary: 'bg-gradient-to-r from-purple-600 to-pink-600',
  primaryHover: 'hover:from-purple-700 hover:to-pink-700',
  
  // Text gradient (Purple → Pink → Orange)
  text: 'bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400',
  
  // Background gradients
  bgDark: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
  bgLight: 'bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50',
  
  // Icon gradients
  iconBlue: 'bg-gradient-to-br from-blue-500 to-purple-600',
  iconPurple: 'bg-gradient-to-br from-purple-500 to-pink-500',
  iconGreen: 'bg-gradient-to-br from-emerald-500 to-teal-500',
};

export const shadows = {
  // Standard shadows
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  
  // Colored glow shadows
  glow: 'shadow-xl shadow-purple-500/30',
  glowPink: 'shadow-xl shadow-pink-500/30',
  glowBlue: 'shadow-xl shadow-blue-500/30',
};

export const spacing = {
  // Container
  container: 'max-w-7xl mx-auto px-6 md:px-8',
  
  // Section padding
  sectionPy: 'py-20 md:py-32',
  
  // Card padding
  cardPadding: 'p-6 md:p-10',
};

export const glassmorphism = {
  // Light glassmorphism
  light: 'bg-white/10 backdrop-blur-2xl border border-white/20',
  
  // Dark glassmorphism
  dark: 'bg-white/5 backdrop-blur-2xl border border-white/10',
  
  // Navigation glassmorphism
  nav: 'bg-white/5 backdrop-blur-2xl border-b border-white/10',
  
  // Card glassmorphism
  card: 'bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl',
};

export const animations = {
  // Entrance animations
  fadeIn: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // 3D hover effect
  hover3D: {
    whileHover: {
      rotateX: 5,
      rotateY: -5,
      scale: 1.02,
      z: 50,
    },
    transition: { type: 'spring', stiffness: 300 }
  },
  
  // Rotating logo
  rotateLogo: {
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: 'linear' }
  },
  
  // Icon hover rotation
  iconRotate: {
    whileHover: { rotate: 360, scale: 1.1 },
    transition: { duration: 0.6 }
  },
  
  // Button hover
  buttonHover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  },
};

export const typography = {
  // Headings
  h1: 'text-5xl md:text-7xl font-black',
  h2: 'text-4xl md:text-5xl font-bold',
  h3: 'text-3xl md:text-4xl font-bold',
  h4: 'text-2xl font-bold',
  
  // Body
  bodyLg: 'text-xl md:text-2xl',
  body: 'text-base md:text-lg',
  bodySm: 'text-sm md:text-base',
  
  // Gradient text
  gradientText: 'bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent',
};

export const buttons = {
  // Primary gradient button
  primary: `
    bg-gradient-to-r from-purple-600 to-pink-600 
    hover:from-purple-700 hover:to-pink-700
    text-white font-bold
    px-8 py-4 rounded-xl
    shadow-lg shadow-purple-500/30
    transition-all duration-300
    hover:shadow-xl hover:shadow-purple-500/50
  `,
  
  // Secondary button
  secondary: `
    bg-white/10 hover:bg-white/20
    border border-white/20 hover:border-white/30
    text-white font-semibold
    px-8 py-4 rounded-xl
    backdrop-blur-sm
    transition-all duration-300
  `,
  
  // Outline button
  outline: `
    bg-transparent border-2 border-purple-500
    text-purple-500 hover:bg-purple-500/10
    font-semibold px-8 py-4 rounded-xl
    transition-all duration-300
  `,
};

export const cards = {
  // Glassmorphic card
  glass: `
    bg-white/5 backdrop-blur-2xl
    border border-white/10
    rounded-3xl p-8
    transition-all duration-300
    hover:border-purple-500/50
    hover:shadow-xl hover:shadow-purple-500/20
  `,
  
  // 3D card with perspective
  card3D: `
    bg-white/5 backdrop-blur-2xl
    border border-white/10
    rounded-3xl p-8
    transition-all duration-300
    transform-gpu
  `,
};
