import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './mobile-menu';
import SubmenuLink from './submenu-link';

const Navbar = ({ toggleNav, setToggleNav }) => {
  const { route } = useRouter();

  return (
    <nav className="bg-white border relative">
      {/* Desktop nav */}
      <div className="hidden md:flex xl:justify-center items-center overflow-x-auto w-full">
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
        <div
          className={`group text-xs uppercase font-light  transition-all ease-in-out duration-150 mx-2`}
        >
          <p className="py-5 px-5 whitespace-nowrap">Our Priests</p>
          <div className="bg-primary-2 flex flex-col absolute invisible group-hover:visible top-14 opacity-100 z-50 min-w-[150px]">
            <SubmenuLink href="/" text="Nkamuke Bede" />
            <SubmenuLink href="/" text="Okerulu John" />
            <SubmenuLink href="/" text="Ojeka Thomas" />
          </div>
        </div>
        <div
          className={`group text-xs uppercase font-light  transition-all ease-in-out duration-150 mx-2`}
        >
          <p className="whitespace-nowrap py-5 px-5">Mass Centers</p>
          <div className="bg-primary-2 flex flex-col absolute invisible group-hover:visible top-14 opacity-100 z-50 min-w-[150px]">
            <SubmenuLink href="/" text="abuja mission" />
            <SubmenuLink href="/" text="alifokpa mission" />
            <SubmenuLink href="/" text="benue mission" />
            <SubmenuLink href="/" text="bode mission" />
            <SubmenuLink href="/" text="calabar mission" />
            <SubmenuLink href="/" text="lagos mission" />
            <SubmenuLink href="/" text="onitsha mission" />
            <SubmenuLink href="/" text="owerri mission" />
            <SubmenuLink href="/" text="port harcourt mission" />
            <SubmenuLink href="/" text="umunze mission" />
          </div>
        </div>
        <div className="group text-xs uppercase font-light mx-2">
          <Link href="/">
            <a
              className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white ${
                route.includes('articles') ? 'bg-primary-2' : 'bg-white'
              }`}
            >
              Articles
            </a>
          </Link>

          <div className="bg-primary-2 flex flex-col absolute invisible group-hover:visible top-14 opacity-100 z-50 min-w-[150px]">
            <a
              className="p-3 hover:bg-primary-3 hover:text-primary"
              href="http://traditionalmass.org/"
              target="_blank"
              rel="noreferrer"
            >
              Traditional latin mass
            </a>
          </div>
        </div>

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

        <Link href="/">
          <a
            className={`text-xs uppercase font-light py-5 px-5 whitespace-nowrap cursor-pointer transition-all ease-in-out duration-150 hover:bg-primary-2-light hover:font-normal hover:text-white mx-2 ${
              route.includes('religious-vocation') ? 'bg-primary-2' : 'bg-white'
            }`}
          >
            Support us
          </a>
        </Link>
      </div>

      {/* Mobile nav */}
      <MobileMenu toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </nav>
  );
};

export default Navbar;
