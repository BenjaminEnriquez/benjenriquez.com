import React, { ReactNode } from 'react';

type Props = {
  // Define your component props here
  children: ReactNode;
  className?: string;
  tag: keyof JSX.IntrinsicElements;
};

const CustomTag: React.FC<Props> = ({ tag, className, children }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
};

export default CustomTag;
