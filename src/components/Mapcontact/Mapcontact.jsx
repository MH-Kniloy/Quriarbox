import React from 'react'
import Container from '../Container/Container'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Mapcontact = () => {
  return (
    <>
      <section className="md:py-[180px] py-[80px] px-4 md:px-0">
        <Container>
          <div className="text-center md:mb-[85px] mb-10">
            <h3 className="text-orange md:text-[32px] text-xl font-heading font-semibold">
              FIND US
            </h3>
            <p className="text-[#11111d] md:text-[40px] text-2xl font-bold">
              Access us easily
            </p>
          </div>

          <div className="md:flex gap-4 mb-8">
            <div>
              <iframe
                className="md:h-[450px] h-[350px] w-full md:w-[760px] mb-8 md:mb-0"
                width="760"
                height="430"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=101%20Baker%20Street,%20New%20York,%20USA,%2012345+(Petroil)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps tracker sport</a>
              </iframe>
            </div>
            <div className="bg-white md:pt-[80px] md:pb-[90px] md:ps-[100px] md:pe-[125px] py-[40px] px-[20px]">
              <h3 className="text-[#464558] text-xl font-bold md:mb-10 mb-6">
                {" "}
                Contact with us
              </h3>
              <h4 className="text-[#5C5B6C] leading-[120%] flex items-center gap-2 mb-4">
                <CiLocationOn className="text-[28px] text-[#FFAF0F]" /> 2277
                Lorem Ave, San Diego, CA 22553
              </h4>
              <h4 className="text-[#5C5B6C] leading-[120%] w-[285px] flex items-center gap-4 mb-4">
                <FiClock className="text-[36px] text-[#FFAF0F]" /> Monday -
                Friday: 10 am - 10pm Sunday: 11 am - 9pm
              </h4>
              <h4 className="text-[#5C5B6C] leading-[120%] w-[285px] flex items-center gap-4 md:mb-[50px] mb-6">
                <MdOutlineEmail className="text-[24px] text-[#FFAF0F]" />{" "}
                info@quriarbox.com
              </h4>
              <div className="flex gap-5">
                <FaFacebookSquare className="text-[#EBEBF5] text-xl hover:text-orange cursor-pointer" />
                <FaInstagram className="text-[#EBEBF5] text-xl hover:text-orange cursor-pointer" />
                <FaSquareTwitter className="text-[#EBEBF5] text-xl hover:text-orange cursor-pointer" />
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='flex gap-2 items-center justify-center py-[24px] md:px-[115px] w-full md:w-auto bg-orange text-white md:text-xl text-[18px] font-heading font-bold rounded-md'>
              <IoCall className='md:text-[30px] text-2xl' />
              Call us to delivery 123-456789
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Mapcontact