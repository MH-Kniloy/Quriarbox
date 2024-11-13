import React from 'react'
import Container from '../Container/Container'
import Logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
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
                  <a className='text-orange font-bold' href="#">Home</a>
                </li>
                <li>
                  <a className='ms-[25px] text-text font-semibold hover:text-orange' href="#">About Us</a>
                </li>
                <li>
                  <a className='ms-[25px] text-text font-semibold hover:text-orange' href="#">Our Services</a>
                </li>
                <li>
                  <a className='ms-[25px] text-text font-semibold hover:text-orange' href="#">Whats New?</a>
                </li>
              </ul>
              <div className="flex">
                <div className="w-[50px] h-[50px] bg-[#FFEDC9] rounded-md flex justify-center items-center ms-[45px] cursor-pointer">
                  <FaSearch className=" text-[#FFAF0F] text-[24px]" />
                </div>
                <button className="bg-[#FFE4D9] text-orange font-heading py-3 px-5 rounded-md text-xl font-bold ms-3">
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