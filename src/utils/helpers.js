// src/utils/helpers.js
/**
 * Common utility functions used across the portfolio
 */

/**
 * Scroll to section smoothly
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Open link in new tab
 */
export const openLink = (url) => {
  if (url && url !== '#') {
    window.open(url, '_blank');
  }
};

/**
 * Format text for display
 */
export const capitalizeFirst = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

/**
 * Format date to readable format
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get screen breakpoint
 */
export const getBreakpoint = () => {
  if (typeof window === 'undefined') return 'mobile';

  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
