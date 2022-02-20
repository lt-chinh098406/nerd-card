import React, { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

import useDarkMode from '../../useDaskMode';

function NavBar({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={'24px'}
            color="#e9c463"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={'24px'}
            color="#e9c463"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={'24px'}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            onClick={handleMenu}
            size={'24px'}
            className="cursor-pointer"
          />
        ) : (
          <>
            <li className="nav-item-hover">Feature</li>
            <li className="nav-item-hover">Menu</li>
            <li className="nav-item-hover">Our Store</li>
            <li className="nav-item-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="z-10 absolute right-8 bg-white p-8 text-center text-black text-13 ">
            <li className="cursor-pointer">Feature</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our Store</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}
export default NavBar;
