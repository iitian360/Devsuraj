// src/config/theme.js
/**
 * Centralized theme configuration
 * All colors, spacing, and design tokens
 */

export const theme = {
  colors: {
    primary: '#ff9f00', // designColor
    dark: '#0f0f0f', // dark background
    light: '#f3f3f3', // light text
    gray: '#999999',
    border: '#000000',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
};

// Utility function to get theme values
export const getThemeValue = (path) => {
  const keys = path.split('.');
  let value = theme;

  for (const key of keys) {
    value = value?.[key];
  }

  return value;
};

export default theme;
