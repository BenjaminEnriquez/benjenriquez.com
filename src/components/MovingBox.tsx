import React, { useState, useEffect } from 'react';

type MovingBoxProps = {
  isHovered: boolean;
};

const MovingBox: React.FC<MovingBoxProps> = ({ isHovered }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 flex items-center justify-center rounded-full transition-transform duration-300 pointer-events-none z-50 ${
        isHovered
          ? 'scale-300 bg-primary-3 hover:bg-primary-3 opacity-50 transition-scale duration-300'
          : 'bg-blue-500 hover:bg-blue-600'
      } hover:scale-110`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default MovingBox;
