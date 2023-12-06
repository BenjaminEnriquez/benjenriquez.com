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
    <>
      <div
        className={`fixed w-2 h-2 flex items-center justify-center bg-primary-3 rounded-full transition-transform duration-300 pointer-events-none z-50 jhonson-visible ${
          isHovered && 'scale-1000 opacity-50 duration-200'
        }`}
        style={{ left: `${position.x - 2}px`, top: `${position.y - 2}px` }}
      ></div>
      <div
        className={`fixed w-6 h-6 flex items-center justify-center border border-primary-3 rounded-full transition-transform duration-300 pointer-events-none z-50 jhonson-visible ${
          isHovered && 'opacity-0'
        }`}
        style={{ left: `${position.x - 10}px`, top: `${position.y - 10}px` }}
      ></div>
    </>
  );
};

export default MovingBox;
