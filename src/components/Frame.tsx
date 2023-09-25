import React, { ReactNode } from 'react';

type FrameProps = {
  children: ReactNode;
};

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <div className="border rounded-2xl border-secondary-1 flex bg-secondary-5 bg-opacity-80">
      <div className="block border-r border-secondary-1 p-5 grid grid-rows-1 auto-rows-max gap-4">
        <div className="block w-2 h-2 rounded-full bg-secondary-1"></div>
        <div className="block w-2 h-2 rounded-full bg-secondary-1"></div>
        <div className="block w-2 h-2 rounded-full bg-secondary-1"></div>
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Frame;
