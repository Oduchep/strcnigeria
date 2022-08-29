import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Society of Traditional Roman Catholics, Nigeria</title>
        <meta
          name="strc"
          content="society of traditional roman catholics of nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat h-96 md:h-[35rem] relative flex items-center justify-center">
        <div className="bg-black opacity-50 w-full h-full absolute top-0"></div>
        <div className="relative w-full md:w-2/3 lg:w-1/2 text-center">
          <h2 className="text-white px-4 text-xl md:text-2xl lg:text-5xl capitalize tracking-wide">
            Welcome to the website of the Society of Traditional Roman
            Catholics, Nigeria.
          </h2>
        </div>
      </section>

      <section className="mt-5 md:mt-10 px-10 md:px-20 py-5 md:py-10">
        <div className="w-full md:w-3/4 mx-auto">
          <p className="text-base md:text-2xl tracking-wide">
            Some people call us sedevacantists because we consider the seat of
            St Peter to be currently vacant (sede vacante) and the Novus Ordo
            hierarchy to be completely devoid of authority; yet we are simply
            catholics, traditional Roman Catholics, who follow the ”old ways,”
            the doctrines and disciplines of the Roman Catholic Church as they
            were as at time of the death of Pope Pius XII in 1958. <br />
            We profess that the Second Vatican Council (Vatican II) and the
            doctrinal, disciplinary and liturgical reforms which have proceeded
            from it are substantial alterations of the Catholic Faith and in no
            way proceed from the Roman Catholic Church, since she is infallible
            in her doctrines, her disciplines, and her liturgical worship.
          </p>
        </div>
      </section>

      <section className="px-10 md:px-20 py-5 md:py-10">
        <h2 className="text-primary-2 text-xl md:text-2xl uppercase mb-3">
          Our Priests
        </h2>
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-y-8 lg:gap-16">
          <div>
            <h4 className="block text-lg md:text-xl font-semibold text-primary tracking-wide">
              Reverend Father Bede Okechukwu Nkamuke
            </h4>
            <p className="text-base md:text-lg">
              Studied at the{' '}
              <a
                href="http://www.mostholytrinityseminary.org/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Most Holy Trinity Seminary, Florida
              </a>{' '}
              and ordained priest by His Excellency{' '}
              <a
                href="http://www.sgg.org/general-info/clergy/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Bishop Daniel Lyttle Dolan
              </a>{' '}
              on November 6, 2013.
            </p>
            <div className="mt-3">
              <p>
                <span className="mr-2 text-base md:text-lg font-semibold text-primary-2">
                  Email:
                </span>
                <a href="mailto:FatherNkamuke@strcnigeria.org">
                  FatherNkamuke@strcnigeria.org
                </a>
              </p>
              <p>
                <span className="mr-2 text-base md:text-lg font-semibold text-primary-2">
                  Phone:
                </span>
                <a href="tel:+2349072065991">+234 9072065991</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="block text-lg md:text-xl font-semibold text-primary tracking-wide">
              Reverend Father Ojeka Thomas
            </h4>
            <p className="text-lg">
              Studied at Sedes Sapientiae Seminary, Lagos, Nigeria then the{' '}
              <a
                href="http://www.mostholytrinityseminary.org/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Most Holy Trinity Seminary, Florida
              </a>{' '}
              , Sedes Sapientiae Seminary and finally St Gertrude the Great
              Church, Ohio under His Excellency{' '}
              <a
                href="http://www.sgg.org/general-info/clergy/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Bishop Daniel Lyttle Dolan
              </a>{' '}
              and later ordained priest by the Most Rev. Rodrigo Da Silva on May
              11, 2022.
            </p>
            <div className="mt-3">
              <p>
                <span className="mr-2 text-lg font-semibold text-primary-2">
                  Email:
                </span>
                <a href="mailto:tmaxtwin@gmail.com">tmaxtwin@gmail.com</a>
              </p>
              <p>
                <span className="mr-2 text-lg font-semibold text-primary-2">
                  Phone:
                </span>
                <a href="tel:+2347049047920">+234 7049047920</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="block text-lg md:text-xl font-semibold text-primary tracking-wide">
              Reverend Father Okerulu John
            </h4>
            <p className="text-lg">
              Studied at Sedes Sapientiae Seminary, Lagos, Nigeria then the{' '}
              <a
                href="http://www.mostholytrinityseminary.org/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Most Holy Trinity Seminary, Florida
              </a>{' '}
              , Sedes Sapientiae Seminary and finally St Gertrude the Great
              Church, Ohio under His Excellency{' '}
              <a
                href="http://www.sgg.org/general-info/clergy/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-500"
              >
                Bishop Daniel Lyttle Dolan
              </a>{' '}
              and later ordained priest by the Most Rev. Rodrigo Da Silva on May
              11, 2022.
            </p>
            <div className="mt-3">
              <p>
                <span className="mr-2 text-lg font-semibold text-primary-2">
                  Email:
                </span>
                <a href="mailto:johnokerulu@gmail.com">johnokerulu@gmail.com</a>
              </p>
              <p>
                <span className="mr-2 text-lg font-semibold text-primary-2">
                  Phone:
                </span>
                <a href="tel:+2347064809668">+234 7064809668</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-10 md:px-20 py-5 md:py-10">
          <h2 className="text-primary-2 text-xl md:text-2xl uppercase">
            Mission locations
          </h2>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary">
            <h4 className="mb-4 text-3xl">Lagos</h4>
            <span className="text-base md:text-lg font-extralight">
              St Patrick Traditional Catholic Chapel, 30 Bola Ademuyiwa Street,
              Off Osolo Way, Aswani, Lagos.
              <br />
              Daily Masses when priest is resident in Lagos
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-primary bg-primary-3">
            <h4 className="mb-4 text-3xl">Port Harcourt</h4>
            <span className="text-base md:text-lg font-extralight">
              St Philomena Traditional Catholic Chapel, 8 Orosi Street, Off
              Psychiatry Road, Rumuigbo, Port Harcourt.
              <br />
              Sunday Mass 9am Low Mass or 11am High Mass. Weekday Masses as
              announced on the weekly Bulletin
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-2">
            <h4 className="mb-4 text-3xl"> Owerri</h4>
            <span className="text-base md:text-lg font-extralight">
              St Louis De Montfort Traditional Catholic Chapel 67 Lobo Street
              Extension, Off Wetheral Junction.
              <br />
              Daily Masses when priest is resident in Owerri
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-lighter">
            <h4 className="mb-4 text-3xl"> Umunze</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-primary bg-primary-3-dark">
            <h4 className="mb-4 text-3xl"> Onitsha</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary">
            <h4 className="mb-4 text-3xl"> Agenebode</h4>
            <span className="text-base md:text-lg font-extralight">
              St John Vianney Traditional Catholic Chapel, Ugabi Street, Ewea
              Quarters, Agenebode <br />
              Masses only on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-2-light">
            <h4 className="mb-4 text-3xl"> Enugu</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-light">
            <h4 className="mb-4 text-3xl"> Calabar</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-2">
            <h4 className="mb-4 text-3xl"> Alifokpa</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary-lighter">
            <h4 className="mb-4 text-3xl"> Boje</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-white bg-primary">
            <h4 className="mb-4 text-3xl"> Ogoja</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:h-80 py-8 px-8 text-primary bg-primary-3">
            <h4 className="mb-4 text-3xl"> Abuja</h4>
            <span className="text-base md:text-lg font-extralight">
              Masses at a private residence on certain occasions.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
