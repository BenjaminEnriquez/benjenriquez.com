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
        <meta name="description test 6" content={metaDescription} />
        <meta
          name="keywords"
          content="test 7 Ben dd d d d djamin Enriquez, xxx xx Frontend Developer,tes test ReactJS TEST 5"
        />
      </Helmet>
    </>
  );
};

export default Meta;
