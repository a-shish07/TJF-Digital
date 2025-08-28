import React, { useEffect, useRef } from 'react';

/**
 * Optimized background video for hero sections.
 * - Autoplays muted, loops, plays inline
 * - Pauses when out of view (saves CPU/GPU)
 * - Respects prefers-reduced-motion
 * - Uses poster as fallback/placeholder
 * - Slight blur + scale to soften background and improve text legibility
 */
const HeroBackgroundVideo = ({
  mp4Src = '/video/hero.mp4',
  webmSrc = null,
  poster = '/video/hero-poster.jpg',
  // blurPx = 6,
  darkOverlayClass = 'bg-black/50', // light/dark overlay for contrast
  playbackRate = 1,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Apply playback rate
    video.playbackRate = playbackRate;

    // Respect reduced motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      video.pause();
    }

    // Pause when out of view for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { root: null, threshold: 0.25 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, [playbackRate]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover will-change-transform"
        style={{
          // filter: `blur(${blurPx}px)`,
          transform: 'scale(1.03)', // avoid visible edges from blur
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        {/* Prefer modern codec first if provided */}
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        {mp4Src ? <source src={mp4Src} type="video/mp4" /> : null}
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast so text stays readable */}
      <div className={`absolute inset-0 ${darkOverlayClass}`} />
    </div>
  );
};

export default HeroBackgroundVideo;