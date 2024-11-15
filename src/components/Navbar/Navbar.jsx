import React, { useRef, useState } from 'react'
import Container from '../Container/Container'
import Logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const inputDesktopRef = useRef(null);
  const inputMobileRef = useRef(null);

   const handleSearchClick = (isMobile) => {
    setSearch(true)
      setTimeout(() => {
        if (isMobile) {
          inputMobileRef.current?.focus();
        } else {
          inputDesktopRef.current?.focus();
        }
      }, 0);
   };

     const handleBlur = () => {
      setTimeout(()=> setSearch(false), 100); // Close the search bar when input loses focus
     };
  return (
    <>
      <nav
        className={`${
          dropdown ? "max-h-[1000px]" : "max-h-[75px]"
        } py-[15px] px-4 md:px-0 bg-navbg md:max-h-full transition-all duration-700 ease-in-out`}
      >
        <Container>
          <div className="md:flex justify-between items-center">
            <div className="md:block flex justify-between items-center pb-4 md:pb-0">
              <img src={Logo} alt="logo" />
              <FaHamburger
                onClick={() => setDropdown(!dropdown)}
                className="md:hidden text-2xl text-[#FFAF0F]"
              />
            </div>

            <div
              className={`${
                dropdown ? "left-0 opacity-100" : "left-[-100%] opacity-0"
              } md:flex md:opacity-100 md:static transition-all duration-700 ease-in-out relative absolute top-0`}
            >
              <div className="flex md:hidden pb-4 md:pb-0">
                <input
                  className={`${
                    search
                      ? "bg-[#FFE4D9] px-4 font-bold w-full rounded-l-md rounded-bl-md outline-none"
                      : "w-0"
                  } transition-all duration-700 outline-none`}
                  type="search"
                  ref={inputMobileRef}
                  onBlur={handleBlur} // Trigger when input loses focus
                />
                <div className="w-[50px] h-[53px] bg-[#FFEDC9] rounded-tr-md rounded-br-md flex justify-center items-center cursor-pointer">
                  <FaSearch
                    onClick={() => handleSearchClick(true)}
                    className=" text-[#FFAF0F] text-[24px]"
                  />
                </div>
              </div>
              <ul className="md:flex items-center">
                <li className="mb-3 md:mb-0">
                  <a className="md:ms-0 text-orange font-bold" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    className="md:ms-[25px] text-text font-semibold hover:text-orange"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    className="md:ms-[25px] text-text font-semibold hover:text-orange"
                    href="#"
                  >
                    Our Services
                  </a>
                </li>
                <li className="mb-3 md:mb-0">
                  <a
                    className="md:ms-[25px] text-text font-semibold hover:text-orange me-11"
                    href="#"
                  >
                    Whats New?
                  </a>
                </li>
              </ul>
              <div className="flex gap-3">
                <div className="md:flex hidden">
                  <input
                    className={`${
                      search
                        ? "bg-[#FFE4D9] px-4 font-bold w-[250px] rounded-l-md rounded-bl-md outline-none"
                        : "w-0"
                    } transition-all duration-700 outline-none`}
                    type="search"
                    ref={inputDesktopRef}
                    onBlur={handleBlur} // Trigger when input loses focus
                  />
                  <div className="w-[50px] h-[53px] bg-[#FFEDC9] rounded-tr-md rounded-br-md flex justify-center items-center cursor-pointer">
                    <FaSearch
                      onClick={() => handleSearchClick(false)}
                      className=" text-[#FFAF0F] text-[24px]"
                    />
                  </div>
                </div>
                <button className="bg-[#FFE4D9] text-orange font-heading py-3 px-5 rounded-md md:text-xl font-bold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar