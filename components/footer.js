import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';

const Footer = () => {
  const { route } = useRouter();
  return (
    <footer className="bg-primary-lighter pt-10 md:pt-5">
      <div className="main-container grid grid-rows-1 md:grid-cols-10 gap-20">
        <div className="col-span-4">
          <div className="w-full xl:w-2/3">
            <h2 className="uppercase text-white text-lg lg:text-xl font-medium tracking-wider mb-10">
              Society of traditional roman catholics, nigeria
            </h2>

            <p className="capitalize text-white text-base font-medium">
              Seminarium Sedis Sapientiae, Nwaniba Road, After Ibom Hotel and
              Golf Resort Intersection, Uyo, Akwa Ibom State, Nigeria.
            </p>
          </div>
        </div>

        <ul className="col-span-3 flex flex-col">
          <Link href="/privacy-policy">
            <li
              className={`font-normal text-base cursor-pointer transition-all ease-in-out duration-150 hover:text-primary-2-light hover:font-medium hover:text-[17px] mb-2 ${
                route === '/privacy-policy'
                  ? 'text-primary-3-dark'
                  : 'text-white'
              }`}
            >
              Privacy Policy
            </li>
          </Link>

          <Link href="/disclaimer">
            <li
              className={`font-normal text-base cursor-pointer transition-all ease-in-out duration-150 hover:text-primary-2-light hover:font-medium hover:text-[17px] mb-2 ${
                route === '/disclaimer' ? 'text-primary-3-dark' : 'text-white'
              }`}
            >
              Disclaimer
            </li>
          </Link>

          <Link href="/terms-of-use">
            <li
              className={`font-normal text-base cursor-pointer transition-all ease-in-out duration-150 hover:text-primary-2-light hover:font-medium hover:text-[17px] mb-2 ${
                route === '/terms-of-use' ? 'text-primary-3-dark' : 'text-white'
              }`}
            >
              Terms of Use
            </li>
          </Link>
        </ul>

        <div className="">
          <a
            href="https://m.facebook.com/sowseminary/"
            target="_blank"
            className="text-3xl text-white"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://youtube.com/channel/UCfWx0YMIK2gcPLE3uYbfmdA"
            target="_blank"
            className="text-5xl text-white"
            rel="noreferrer"
          >
            <ImYoutube2 />
          </a>
        </div>
      </div>

      <div className="bg-primary text-white text-center py-4">
        <Link href="/">
          &copy; 2019 Society of Traditional Roman Catholics, Nigeria
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
