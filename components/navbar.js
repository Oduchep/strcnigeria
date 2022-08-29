import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ toggleNav, setToggleNav }) => {
  const { route } = useRouter();

  return (
    <nav className="bg-white border">
      {/* Desktop nav */}
      <ul className="hidden justify-center md:flex">
        <Link href="/">
          <li
            className={`text-xs uppercase font-light py-5 px-10 cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route === '/' ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about-us">
          <li
            className={`text-xs uppercase font-light py-5 px-10 cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('about-us') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            About Us
          </li>
        </Link>
        <Link href="/">
          <li
            className={`text-xs uppercase font-light py-5 px-10 cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('feeds') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Feeds
          </li>
        </Link>
        <Link href="/">
          <li
            className={`text-xs uppercase font-light py-5 px-10 cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('resources') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Resources
          </li>
        </Link>
      </ul>

      {/* Mobile nav */}

      <div
        className={`bg-white px-6 py-10 w-80 sm:w-96 h-full fixed z-50 top-0 transition-all ease-in-out duration-300 ${
          toggleNav ? 'left-0' : '-left-96'
        }`}
      >
        <button className="float-right" onClick={() => setToggleNav(false)}>
          <AiOutlineClose className="text-3xl" />
        </button>

        <ul className="mt-20 bg-white">
          <Link href="/">
            <li
              onClick={() => setToggleNav(false)}
              className={`w-2/3 uppercase my-4 py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route === '/'
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about-us">
            <li
              onClick={() => setToggleNav(false)}
              className={`w-2/3 uppercase my-4 py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('about-us')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              About Us
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setToggleNav(false)}
              className={`w-2/3 uppercase my-4 py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('feeds')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Feeds
            </li>
          </Link>
          <Link href="/">
            <li
              onClick={() => setToggleNav(false)}
              className={`w-2/3 uppercase my-4 py-3 px-10 cursor-pointer transition-all ease-in-out hover:bg-primary-2 hover:font-normal hover:text-white ${
                route.includes('resources')
                  ? 'text-base text-primary-2 font-semibold'
                  : 'font-light text-sm'
              }`}
            >
              Resources
            </li>
          </Link>
        </ul>
      </div>
      {/* Overlay for mobile nav */}
      {toggleNav && (
        <div
          onClick={() => setToggleNav(true)}
          className="fixed z-10 bg-slate-800 opacity-60 h-full w-full top-0"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
