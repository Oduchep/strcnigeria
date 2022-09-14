import Image from 'next/image';
import React from 'react';

const Benue = () => {
  return (
    <>
      <section className="bg-[url('https://res.cloudinary.com/strcnigeria/image/upload/v1663186418/cld-sample.jpg')] h-80 md:h-[28rem] bg-cover bg-center bg-no-repeat relative">
        <div className="opacity-50 w-full h-full absolute top-0 bg-primary-2"></div>
        <div className="bg-gradient-to-l from-primary flex items-center justify-center md:justify-end h-full relative z-10">
          <div className="p-5 md:p-40">
            <h1 className="text-white mb-4 text-4xl md:text-6xl">
              Benue Mission
            </h1>
            {/* <h2 className="text-white text-xl">
              St Louis De Montfort Catholic Chapel
            </h2> */}
          </div>
        </div>
      </section>

      <section className="main-container grid lg:grid-cols-3 gap-16">
        <div className="order-2 lg:order-1 col-span-3 lg:col-span-2">
          <div>
            <h3 className="capitalize text-center text-primary text-2xl md:text-4xl mb-8">
              a brief history of the benue mission
            </h3>
            <p className="text-lg">
              The Mission in Benue began officially on December 31th 2021, when
              we got to the current rented flat or apartment. Her first mass was
              celebrated on March 23rd 2022 by Reverend Father Nkamuke Bede, in
              the presence of some of the members. <br />
              The mission presently has two Seminarians in Sedes Sapientiae
              Seminary who when they are ordained will return to the mission to
              provide for the spiritual needs of the faithful namely: Mass and
              Sacraments with the necessary catechesis that the faithful are in
              need of.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/strcnigeria/image/upload/v1663186419/cld-sample-4.jpg"
                width="100%"
                height={100}
                layout="responsive"
                priority="true"
                alt="image"
              />
            </div>

            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/strcnigeria/image/upload/v1663186418/cld-sample.jpg"
                width="100%"
                height={100}
                layout="responsive"
                priority="true"
                alt="image"
              />
            </div>

            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/strcnigeria/image/upload/v1663186419/cld-sample-3.jpg"
                width="100%"
                height={100}
                layout="responsive"
                priority="true"
                alt="image"
              />
            </div>

            <div className="col-span-1">
              <Image
                src="https://res.cloudinary.com/strcnigeria/image/upload/v1663186418/cld-sample-2.jpg"
                width="100%"
                height={100}
                layout="responsive"
                priority="true"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1 order-1 lg:order-2">
          <div className="mb-10 shadow-lg shadow-primary-light/30">
            <h3 className="uppercase text-center text-white text-lg p-3 bg-primary">
              address
            </h3>
            <div className="p-5">
              <p>No 47 Emmanuel Ajogi Avenue, G.R.A Otukpo Benue State.</p>
            </div>
          </div>

          <div className="mb-10 shadow-lg shadow-primary-light/30">
            <h3 className="uppercase text-center text-white text-lg p-3 bg-primary">
              priests
            </h3>
            <div className="p-5">
              <p>Reverend Father Nkamuke Bede (08165672764)</p>
              <p>Reverend Father Ojeka Thomas (07049047920)</p>
              <p>Reverend Father Okerulu John (07064809668)</p>
            </div>
          </div>

          <div className="mb-10 shadow-lg shadow-primary-light/30">
            <h3 className="uppercase text-center text-white text-lg p-3 bg-primary">
              coordinators
            </h3>
            <div className="p-5">
              <p>Mrs Josephine Ambrose, (07069754001)</p>
              <p>Miss Boniface Nancy, (08165568224)</p>
            </div>
          </div>

          <div className="mb-10 shadow-lg shadow-primary-light/30">
            <h3 className="uppercase text-center text-white text-lg p-3 bg-primary">
              directions
            </h3>
            <div className="p-5">
              <p>
                From the park by (Car or Motorbike) At the park take a motorbike
                to No 47 Emmanuel Ajogi Avenue G.R.A Otukpo.
              </p>
            </div>
          </div>

          <div className="mb-10 shadow-lg shadow-primary-light/30">
            <h3 className="uppercase text-center text-white text-lg p-3 bg-primary">
              current activities
            </h3>
            <div className="p-5">
              <p>
                <span className="font-bold text-primary-2">Sunday:</span> Mass
                or prayers in the absence of a Priest 10am.
              </p>
              <p>
                <span className="font-bold text-primary-2">Rosary:</span> Daily.
              </p>
              <p>
                <span className="font-bold text-primary-2">Friday:</span> Sacred
                Heart Devotion 4pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benue;
