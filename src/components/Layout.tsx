import React, { ReactNode, useEffect, useState } from 'react';
import Header from './layout/Header';
import { scrollSpy } from 'react-scroll';

type LayoutProps = {
  children: ReactNode;
  handleHoverEnter: () => void;
  handleHoverLeave: () => void;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  handleHoverEnter,
  handleHoverLeave,
}) => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header
        isHovered={isHovered}
        handleHoverEnter={handleHoverEnter}
        handleHoverLeave={handleHoverLeave}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
