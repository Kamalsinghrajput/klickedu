import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import images from "../constants/images";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="w-screen h-[75px] bg-[#130845] flex items-center justify-around px-4 ">
        <img className="h-[50px] w-[150px]" src={images.logo} alt="" />

        <ul className="text-white flex gap-8  ">
          {["Home", "Courses", "Contact Us", "About"].map((item, index) => (
            <li
              className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:bg-[#D62D77] rounded px-2 py-1"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <div onClick={toggleMenu} className="md:hidden">
          <GiHamburgerMenu className="w-[25px] h-[25px] " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
