import React, { useRef, useState } from 'react'
import Container from '../Container/Container'
import Logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const inputRef = useRef(null);

   const handleSearchClick = () => {
     setSearch(!search);
     // Add focus to the input field
     if (!search) {
       setTimeout(() => {
         inputRef.current?.focus();
       }, 0); // Ensure input is rendered before focusing
     } 
   };

     const handleBlur = () => {
       setSearch(false); // Close the search bar when input loses focus
     };
  return (
    <>
      <nav className="py-[15px] bg-navbg">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="flex">
              <ul className="flex items-center">
                <li>
                  <a className="text-orange font-bold" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="ms-[25px] text-text font-semibold hover:text-orange"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="ms-[25px] text-text font-semibold hover:text-orange"
                    href="#"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    className="ms-[25px] text-text font-semibold hover:text-orange me-11"
                    href="#"
                  >
                    Whats New?
                  </a>
                </li>
              </ul>
              <div className="flex gap-3">
                <div className="flex">
                  <input
                    className={`${
                      search
                        ? "bg-[#FFE4D9] px-4 font-bold w-[250px] rounded-l-md rounded-bl-md outline-none"
                        : "w-0"
                    } transition-all duration-700 outline-none`}
                    type="search"
                    ref={inputRef}
                    onBlur={handleBlur} // Trigger when input loses focus
                  />
                  <div className="w-[50px] h-[53px] bg-[#FFEDC9] rounded-tr-md rounded-br-md flex justify-center items-center cursor-pointer">
                    <FaSearch
                      onClick={handleSearchClick}
                      className=" text-[#FFAF0F] text-[24px]"
                    />
                  </div>
                </div>
                <button className="bg-[#FFE4D9] text-orange font-heading py-3 px-5 rounded-md text-xl font-bold">
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