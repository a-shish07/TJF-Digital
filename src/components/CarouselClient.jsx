import React, { useState, useEffect } from "react";

const CircleCarousel = ({ items = [], radius = 320, duration = 25 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Default client logos for demo
  const defaultItems = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100">
      
      {/* 3D Perspective container */}
      <div 
        className={`relative transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center center'
        }}
      >
        {/* Rotating circle container */}
        <div
          className="relative"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transformStyle: 'preserve-3d',
            animation: `rotateY ${duration}s linear infinite`,
          }}
        >
          {displayItems.map((item, i) => {
            const angle = (i / displayItems.length) * 360;
            
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%) 
                    rotateY(${angle}deg) 
                    translateZ(${radius}px)
                  `,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Client logo card - Bold and Clean */}
                <div 
                  className="relative logo-card"
                  style={{
                    transform: `rotateY(${-angle}deg)`,
                  }}
                >
                  {/* Main bold card */}
                  <div className="relative w-40 h-28 rounded-xl bg-white shadow-2xl border border-gray-300 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                    
                    {/* Logo container - minimal padding for larger logos */}
                    <div className="relative h-full flex items-center justify-center p-3">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="max-w-full max-h-full object-contain filter drop-shadow-md"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="120" height="80" rx="8" fill="#F8F9FA"/>
                              <rect x="30" y="30" width="60" height="6" rx="3" fill="#E9ECEF"/>
                              <rect x="40" y="45" width="40" height="4" rx="2" fill="#DEE2E6"/>
                              <circle cx="60" cy="20" r="8" fill="#CED4DA"/>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Strong shadow for depth */}
                  <div className="absolute inset-0 -z-10 bg-black/10 rounded-xl blur-xl scale-95 translate-y-2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simple loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes rotateY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CircleCarousel;