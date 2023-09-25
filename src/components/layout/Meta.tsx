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
          content="Benjamin Enriquez, Frontend Developer, ReactJS"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>
    </>
  );
};

export default Meta;
