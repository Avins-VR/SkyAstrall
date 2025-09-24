import React, { useEffect, useState } from "react";

const FloatingSquaresBackground = () => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const numSquares = 15; // Increased number of squares for better coverage
    const generated = Array.from({ length: numSquares }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 50) + 10, // 20px–80px
      left: Math.random() * 100, // percentage
      top: Math.random() * 100, // Add initial top position
      delay: Math.random() * 1, // 0-8 seconds delay
      duration: Math.random() * 20 + 15, // 15s–35s duration
      //opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2 opacity for variety
      opacity: 0.035 }));
    setSquares(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {squares.map((sq) => (
        <div
          key={sq.id}
          className="absolute backdrop-blur-sm rounded-lg animate-float"
          style={{
            width: `${sq.size}px`,
            height: `${sq.size}px`,
            left: `${sq.left}%`,
            top: `${sq.top}%`,
            backgroundColor: `rgba(255, 255, 255, ${sq.opacity})`,
            animationDuration: `${sq.duration}s`,
            animationDelay: `${sq.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingSquaresBackground;