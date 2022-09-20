import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Onitsha = () => {
  return (
    <>
      <HeadSeo
        title={`Onitsha Mission`}
        description={`Onitsha mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>Onitsha</div>
    </>
  );
};

export default Onitsha;
