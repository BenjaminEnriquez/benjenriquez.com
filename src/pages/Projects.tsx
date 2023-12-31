import React from 'react';
import Text from '../components/Text';
import Frame from '../components/Frame';
import Meta from '../components/layout/Meta';

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <>
      <Meta title="Projects" />
      <section className="h-fit flex items-center px-8 max-w-screen-xl mx-auto pt-20">
        <div className="w-full relative">
          <Text
            className="text-[2rem] text-center mb-6"
            element="h2"
            label="PROJECTS"
          />
          <Frame>
            <Text className="text-sm" label="Content loading..." />
          </Frame>
        </div>
      </section>
    </>
  );
};

export default Projects;
