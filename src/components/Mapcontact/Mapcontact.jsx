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
      <section className="py-[180px]">
        <Container>
          <div className="text-center mb-[85px]">
            <h3 className="text-orange text-[32px] font-heading font-semibold">
              FIND US
            </h3>
            <p className="text-[#11111d] text-[40px] font-bold">
              Access us easily
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <div>
              <iframe
                className="md:h-[450px] h-[350px]"
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
            <div className="bg-white pt-[80px] pb-[90px] ps-[100px] pe-[125px]">
              <h3 className="text-[#464558] text-xl font-bold mb-10">
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
              <h4 className="text-[#5C5B6C] leading-[120%] w-[285px] flex items-center gap-4 mb-[50px]">
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
            <button className='flex gap-2 items-center py-[24px] px-[115px] bg-orange text-white text-xl font-heading font-bold rounded-md'>
              <IoCall className='text-[30px]' />
              Call us to delivery 123-456789
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Mapcontact