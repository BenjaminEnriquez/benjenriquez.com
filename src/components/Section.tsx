import React from 'react';
import Container from './layout/Container';

type Props = {
  children: any;
  id: string;
};

const Section: React.FC<Props> = ({ children, id }) => {
  return (
    <section id={id} className="min-h-screen">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
