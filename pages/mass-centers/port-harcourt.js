import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const PortHarcourt = () => {
  return (
    <>
      <HeadSeo
        title={`Port Harcourt Mission`}
        description={`Port Harcourt mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />
      <div>PortHarcourt</div>
    </>
  );
};

export default PortHarcourt;
