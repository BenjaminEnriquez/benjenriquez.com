import React from 'react';
import { Helmet } from 'react-helmet';

type MetaProps = {
  title?: string;
  metaDescription?: string;
};

const Meta: React.FC<MetaProps> = ({ title = '', metaDescription = '' }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="Benjamin Enriquez, xxx xx Frontend Developer,tes test ReactJS"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>
    </>
  );
};

export default Meta;
