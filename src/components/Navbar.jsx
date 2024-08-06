import { useState } from "react";
import logo from "../images/logo.svg";
import iconOpen from "../images/icon-hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="py-6 px-4 lg:px-12">
      <nav className="hidden lg:flex justify-between items-center">
        <img
          src={logo}
          alt="This is the logo of the landing page called sunny"
        />
        <ul className="flex gap-12 items-center">
          <li>
            <a href="#" className="text-white text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-lg">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black bg-white px-6 py-4 flex justify-center items-center rounded-full fraunces-700 "
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* mobile view */}
      <nav className="lg:hidden flex items-center justify-between relative">
        <div>
          <img
            src={logo}
            alt="logo of the website named snap"
            width={140}
            height={140}
          />
        </div>
        <div>
          <img
            className="cursor-pointer"
            src={iconOpen}
            alt="This is the icon that opens the mobile navigation"
            width={25}
            height={25}
            onClick={toggleNavigation}
          />
        </div>

        {isOpen && (
          <div className="absolute lg:hidden  bg-white top-[5rem] z-50 py-10 w-full mx-auto">
            <div
              className="w-0 h-0 border-t-[50px] border-t-transparent border-r-[75px] border-r-white border-b-[50px] border-b-transparent -top-6 right-0 absolute"
            />
            {/* <div className="absolute w-8 h-8 bg-red-500 left-1/2 transform -translate-x-1/2 -top-2 rotate-45" /> */}
            <ul className="flex flex-col gap-8 items-center barlow-semibold">
              <li>
                <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-Very-Dark-Grayish-Blue text-lg">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black bg-Yellow px-6 py-4 flex justify-center items-center rounded-full fraunces-700 "
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
