import React, { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import { scrollSpy } from 'react-scroll';
import ParallaxText from '../ParallaxText';

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

  const [isHovered] = useState(false);

  return (
    <>
      <Header
        isHovered={isHovered}
        handleHoverEnter={handleHoverEnter}
        handleHoverLeave={handleHoverLeave}
      />
      <ParallaxText className="top-[-90px]" baseVelocity={-1}>
        BENJAMIN WEB MASTER&nbsp;
      </ParallaxText>

      <main>{children}</main>
      <ParallaxText className="bottom-[-80px]" baseVelocity={0.5}>
        ENRIQUEZ WEB MASTER&nbsp;
      </ParallaxText>
    </>
  );
};

export default Layout;
