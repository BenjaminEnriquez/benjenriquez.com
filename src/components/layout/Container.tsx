import React, { ReactNode } from 'react';

type Props = {
  // Define your component props here
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="w-[1200px] max-w-full m-auto">{children}</div>;
};

export default Container;
