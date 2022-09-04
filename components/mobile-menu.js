import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = ({ toggleNav, setToggleNav }) => {
  const { route } = useRouter();
  return (
    <>
      <div
        className={`bg-white px-6 py-10 w-80 sm:w-96 h-full fixed z-50 top-0 transition-all ease-in-out duration-300 ${
          toggleNav ? 'left-0' : '-left-96'
        }`}
      >
        <button className="float-right" onClick={() => setToggleNav(false)}>
          <AiOutlineClose className="text-3xl" />
        </button>

        <div className="mt-20 bg-white flex flex-col">
          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route === '/'
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/about-us">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('about-us')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              About Us
            </a>
          </Link>
          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('feeds')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Feeds
            </a>
          </Link>
          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Our Priests
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Mass Centers
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Articles
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Newsletter
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Bulletin
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Seminary
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Religious Vocation
            </a>
          </Link>

          <Link href="/">
            <a
              onClick={() => setToggleNav(false)}
              className={`uppercase py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Support us
            </a>
          </Link>
        </div>
      </div>
      {/* Overlay for mobile nav */}

      {toggleNav && (
        <div
          onClick={() => setToggleNav(true)}
          className="fixed z-10 bg-slate-800 opacity-60 h-full w-full top-0"
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
