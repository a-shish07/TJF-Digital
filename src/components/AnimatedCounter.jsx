// src/components/AnimatedCounter.jsx
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ end, duration = 3, delay = 0, suffix = '', className }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return; // start only when visible

    let start = 0;
    const totalFrames = Math.round(duration * 60); // 60fps
    const increment = end / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        start = end;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {value}{suffix}
    </motion.span>
  );
}
