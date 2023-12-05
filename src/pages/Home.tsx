import React, { useState } from 'react';
import Text from '../components/Text';
import Me from '../img/benj.png';
import Frame from '../components/Frame';
import Meta from '../components/layout/Meta';
import ParallaxText from '../components/ParallaxText';
import Section from '../components/Section';
import Main from '../components/sections/Main';

type HomeProps = {
  handleHoverEnter?: () => void;
  handleHoverLeave?: () => void;
};

const Home: React.FC<HomeProps> = ({ handleHoverEnter, handleHoverLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Meta title="Home" />
      <ParallaxText baseVelocity={-1}>BENJAMIN WEB DEVELOPER </ParallaxText>
      <section className="h-screen flex items-center px-8 max-w-screen-2xl mx-auto relative z-0">
        <div className="w-1/2 relative">
          <Frame>
            <Text
              className="text-sm"
              element="div"
              label="Hello, I am Benjamin Enriquez Jr, a passionate frontend developer with over 7 years of experience in the field. I specialize in creating dynamic and user-friendly web experiences by harnessing the power of React.js."
            />
          </Frame>
        </div>
        <div className="w-1/2 relative h-full flex justify-center items-end">
          {/* <img
            className="w-[500px] h-fit mix-blend-lighten"
            src={Me}
            alt="Benjamin GitHub Shirt"
          /> */}
        </div>
      </section>
      <Section id="home">
        <Main />
        <h1
          className={`text-blue-500 cursor-pointer hover:text-green-500 ${
            isHovered ? 'text-red-500' : ''
          }`}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          Hover over me to change box color!
        </h1>
      </Section>
      <Section id="projects">Projects</Section>
    </>
  );
};

export default Home;
