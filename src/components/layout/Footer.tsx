import React from 'react';
import Container from './Container';

type Props = {
  // Define your component props here
  props?: any;
};

const Footer: React.FC<Props> = ({ props }) => {
  return (
    <footer>
      <Container>Footer HERE</Container>
    </footer>
  );
};

export default Footer;
