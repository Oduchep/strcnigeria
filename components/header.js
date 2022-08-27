import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import Navbar from './navbar';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="fixed z-10 w-full">
      <div className="bg-primary flex md:block justify-between px-5 py-5 lg:px-20 lg:py-10">
        <button
          className="block md:hidden h-fit"
          onClick={() => setToggleNav(true)}
        >
          <AiOutlineMenu className="text-3xl text-white" />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <Image width={40} height={40} alt="website logo" />
            <h1 className="ml-10 mt-5 md:mt-0 uppercase text-white text-xl lg:text-2xl font-medium tracking-wider">
              Society of traditional roman catholics, nigeria
            </h1>
          </div>

          <div className="mt-5 md:mt-0 flex items-center">
            <a href="mailto:FatherNkamuke@strcnigeria.org">
              <AiOutlineMail className="text-white text-2xl" />
            </a>

            <a href="tel:+2349072065991" className="ml-5 text-white">
              +234 907 206 5991
            </a>
          </div>
        </div>
      </div>

      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </header>
  );
};

export default Header;
