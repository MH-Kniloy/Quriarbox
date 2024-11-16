import React from 'react'
import Flogo from '../../assets/footerlogo.png'
import Container from '../Container/Container';

const Footer = () => {
  return (
    <>
      <footer className="py-[60px] px-4 md:px-0 bg-[#2F2E41]">
        <Container>
          <div className="md:flex justify-between">
            <div className="md:w-1/2">
              <img className="mb-2" src={Flogo} alt="" />
              <p className="font-semibold leading-[22px] text-[#9291A1] w-[200px] mb-10 md:mb-0">
                The most trusted Courier company in your area.
              </p>
            </div>
            <div className="md:w-1/2 md:flex justify-between">
              <div>
                <ul>
                  <li className="text-xl font-heading text-white font-bold mb-5">
                    Other links
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Movers website
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Traffic Update
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="text-xl font-heading text-white font-bold mb-5">
                    Services
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Corporate goods
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Artworks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Documents
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="text-xl font-heading text-white font-bold mb-5">
                    Customer Care
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Contact US
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-[#9291A1] font-semibold hover:text-white"
                      href="#"
                    >
                      Get Update
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer