import React from 'react';
import logoImg from '../assets/logo.jpg';

/**
 * Reusable brand logo component
 * - size: 'sm' | 'md' | 'lg'
 * - theme: 'dark' | 'light'  -> controls text color for the "TJF" part
 * - showText: boolean        -> show "TJF Digital" next to the image
 */
const Logo = ({ size = 'md', theme = 'dark', showText = true, className = '' }) => {
  const imageSize = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  }[size];

  const textSize = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  }[size];

  const tjfColor = theme === 'light' ? 'text-white' : 'text-gray-900';
  const digitalGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500';

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoImg}
        alt="TJF Digital logo"
        className={`${imageSize} rounded-md shadow-sm object-cover`}
        loading="lazy"
      />
      {showText && (
        <div className={`font-bold font-serif leading-none ${textSize}`}>
          <span className={`${tjfColor}`}>TJF </span>
          <span className={`${digitalGradient}`}>Digital</span>
        </div>
      )}
    </div>
  );
};

export default Logo;