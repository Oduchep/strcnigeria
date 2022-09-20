import React from 'react';
import HeadSeo from '../../components/headSEO';
import siteMetadata from '../../data/siteMetaData';

const Calabar = () => {
  return (
    <>
      <HeadSeo
        title={`Calabar Mission`}
        description={`Calabar mission page of society of traditional roman catholics of nigeria`}
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={'website'}
      />

      <div>Calabar</div>
    </>
  );
};

export default Calabar;
