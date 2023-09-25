import React from 'react';
import Text from '../components/Text';
import Me from '../img/benj.png';
import Frame from '../components/Frame';
import Meta from '../components/layout/Meta';
import ParallaxText from '../components/ParallaxText';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Meta title="Home" />
      <ParallaxText baseVelocity={-1}>BENJAMIN</ParallaxText>
      <section className="h-screen flex items-center px-8 max-w-screen-2xl mx-auto relative z-0">
        <div className="w-1/2 relative">
          <Frame>
            <Text
              className="text-sm"
              element="div"
              label="Hello, I am Benjamin Enriquez Jr, a passionate frontend developer with over 5 years of experience in the field. I specialize in creating dynamic and user-friendly web experiences by harnessing the power of React.js."
            />
          </Frame>
        </div>
        <div className="w-1/2 relative h-full flex justify-center items-end">
          <img
            className="w-[500px] h-fit mix-blend-lighten"
            src={Me}
            alt="Benjamin GitHub Shirt"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
