import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Layout from '../components/layout/Layout';
import Projects from '../pages/Projects';
import MovingBox from '../components/MovingBox';

const AppRouter: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <MovingBox isHovered={isHovered} />
      <Routes>
        <Route
          path="/*"
          element={
            <Layout
              handleHoverEnter={handleHoverEnter}
              handleHoverLeave={handleHoverLeave}
            >
              <Routes>
                <Route
                  path="/*"
                  element={
                    <Home
                      handleHoverEnter={handleHoverEnter}
                      handleHoverLeave={handleHoverLeave}
                    />
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
