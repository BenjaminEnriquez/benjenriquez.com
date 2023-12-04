import React from 'react';
import CustomTag from '../CustomTag';

type Props = {
  props?: any;
};

const Main: React.FC<Props> = ({ props }) => {
  return (
    <>
      <CustomTag tag="p">Hello, I am</CustomTag>
      <CustomTag tag="h2">BENJAMIN</CustomTag>
    </>
  );
};

export default Main;
