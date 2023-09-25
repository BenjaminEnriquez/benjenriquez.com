import React from 'react';
import Text from '../components/Text';
import Frame from '../components/Frame';
import Meta from '../components/layout/Meta';

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Meta title="About Me" />
      <section className="h-fit flex items-center px-8 max-w-screen-xl mx-auto pt-20">
        <div className="w-full relative">
          <Text
            className="text-[2rem] text-center mb-6"
            element="h2"
            label="ABOUT ME"
          />
          <Frame>
            <Text
              className="text-sm"
              label="I am a frontend developer with over 5 years of experience in building web applications. My primary skills are in React.js and WordPress development. I have a strong understanding of HTML, CSS, and JavaScript, and I am always looking to learn new technologies and improve my skills. I am passionate about creating beautiful and functional user interfaces that provide a great user experience. In my free time, I enjoy reading about new technologies and experimenting with new programming languages and frameworks."
            />
          </Frame>
        </div>
      </section>
    </>
  );
};

export default About;
