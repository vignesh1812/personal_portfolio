import NavLink from "./NavLink";

const MenuOverlay = ({ links,setnavbarOpen }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} onClick={()=>{setnavbarOpen(false)}}>
          <NavLink path={link.path} title={link.title} offset={link.offset}/>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;