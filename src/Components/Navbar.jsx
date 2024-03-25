
// import Link from "next/link";
import { useState, useRef } from "react";
import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/24/solid";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion, useInView } from 'framer-motion'
import MenuOverlay from "./MenuOverlay";
import navlogo from '../assets/images/logo.png';

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })
  const navVariants = {
    intial: {
      y: -50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
    },

  }
  const navLinks = [
    {
      path: "profile",
      title: "Profile",
      offset:-80
          
    },
    {
      path: "about",
      title: "About",
      offset:-30
    },
    {
      path: "project",
      title: "Projects",
      offset:-70

    },
    {
      path: "contact",
      title: "Contact",
      offset:-30

    },
  ];
  return (
    <motion.nav ref={ref} variants={navVariants} initial="intial" animate={isInView ? "animate" : "initial"} transition={
      { duration: 0.4 }
    } className="sticky top-0 left-0 right-0 bg-[#121212]  bg-opacity-95 z-10">
      <div className="flex flex-wrap items-center justify-between mx-auto  py-2">
        <a
          href={"/"}
          className="text-white text-lg md:text-4xl font-semibold"
        >
          <img className="rounded-full" src={navlogo} width={60} height={60}/>
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              className="text-slate-200 py-4 rounded cursor-pointer"
              onClick={() => setnavbarOpen(true)}
            >
              <FaBars className="h-5 w-5" />
              {/* <Bars3Icon className="h-5 w-5" /> */}
            </button>
          ) : (
            <button
              className="text-slate-200 py-4 rounded cursor-pointer"
              onClick={() => setnavbarOpen(false)}
            >
              <IoClose className="h-5 w-5" />
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>
        {/* <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row space-x-8">

            <li className="">
              <Link
                className="ani-text cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 sm:text-xl hover:text-white "
                to={'profile'}
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
              >
                Profile
              </Link>
            </li>
            <li className="">
              <Link
                className="ani-text cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 sm:text-xl hover:text-white "
                to={'about'}
                spy={true}
                offset={-30}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                className="ani-text cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 sm:text-xl hover:text-white "
                to={'project'}
                spy={true}
                offset={-55}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="">
              <Link
                className="ani-text cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 sm:text-xl hover:text-white "
                to={'contact'}
                spy={true}
                offset={-30}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <NavLink title={link.title} path={link.path} offset={link.offset}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay setnavbarOpen={setnavbarOpen} links={navLinks} /> : null}
    </motion.nav>
  );
};

export default Navbar;
