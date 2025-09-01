import React from 'react';
import logoImg from '../assets/logo.jpg';

/**
 * Reusable brand logo component
 * - size: 'sm' | 'md' | 'lg'
 * - theme: 'dark' | 'light'  -> controls text color for the "TJF" part
 * - showText: boolean        -> show "TJF Digital" next to the image
 */
const Logo = ({ size = 'md', theme = 'dark', showText = true, className = '' }) => {
  // Responsive sizes for better prominence and consistency
  const imageSize = {
    // Keep sizes compact at 1024 (lg) and scale up only on xl
    sm: 'h-8 w-8 md:h-9 md:w-9 xl:h-10 xl:w-10',
    md: 'h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14',
    lg: 'h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16',
  }[size];

  const textSize = {
    // Prevent oversized logo text at 1024; bump sizes only on xl
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl xl:text-5xl',
    lg: 'text-3xl md:text-4xl xl:text-5xl',
  }[size];

  const tjfColor = theme === 'light' ? 'text-white' : 'text-gray-900';
  const digitalGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500';

  return (
    <div className={`inline-flex items-center gap-2 xl:gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="TJF Digital logo"
        className={`${imageSize} rounded-lg shadow-md object-cover`}
        loading="lazy"
      />
      {showText && (
        <div className={`font-bold font-serif leading-none whitespace-nowrap ${textSize}`}>
          <span className={`${tjfColor}`}>TJF </span>
          <span className={`${digitalGradient}`}>Digital</span>
        </div>
      )}
    </div>
  );
};

export default Logo;