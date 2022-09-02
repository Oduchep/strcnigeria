import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ toggleNav, setToggleNav }) => {
  const { route } = useRouter();

  return (
    <nav className="bg-white border">
      {/* Desktop nav */}
      <div className="hidden md:flex justify-center items-center overflow-x-auto w-full">
        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route === '/' ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about-us">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('about-us') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            About Us
          </a>
        </Link>
        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('feeds') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Feeds
          </a>
        </Link>
        <a
          className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2`}
        >
          Our Priests
        </a>
        <a
          className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2`}
        >
          Mass Centers
        </a>
        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('articles') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Articles
          </a>
        </Link>

        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('newsletter') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Newsletter
          </a>
        </Link>

        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('bulletin') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Bulletin
          </a>
        </Link>

        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('seminary') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Seminary
          </a>
        </Link>

        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('religious-vocation') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Religious Vocation
          </a>
        </Link>
      </div>

      {/* Mobile nav */}

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
        </div>
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
