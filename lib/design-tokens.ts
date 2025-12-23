export const designTokens = {
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  typography: {
    heading: {
      h1: 'text-3xl md:text-4xl font-bold',
      h2: 'text-2xl font-semibold',
      h3: 'text-xl font-semibold',
    },
    body: {
      base: 'text-base leading-relaxed',
      large: 'text-lg leading-relaxed',
      small: 'text-sm',
    },
  },
  colors: {
    primary: 'emerald-600',
    primaryHover: 'emerald-700',
    muted: 'muted-foreground',
    destructive: 'destructive',
  },
  borderRadius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
  },
} as const

