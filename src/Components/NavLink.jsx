// import Link from "next/link";

import {Link} from 'react-scroll'


const NavLink = ({ path, title,offset }) => {
  return (
    <Link
      className="ani-text cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] rounded md:p-0 sm:text-xl hover:text-white "
      to={`${path}`}
      spy={true}
      offset={offset}
      smooth={true}
      duration={500}
    >
      {title}
    </Link>
  );
};

export default NavLink;
