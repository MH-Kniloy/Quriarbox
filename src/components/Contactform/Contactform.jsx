import React from 'react'
import Contact from '../../assets/contactform.png'
import { FaPaperPlane } from "react-icons/fa";

const Contactform = () => {
  return (
    <>
      <section className="md:pb-[200px] px-4 md:px-0">
        <div className="container mx-auto max-w-[870px]">
          <div className='md:flex gap-8 items-center'>
            <div>
              <img className='w-1/2 md:w-auto mx-auto md:mx-0 mb-4 md:mb-0' src={Contact} alt="" />
              <h3 className="md:text-2xl text-xl text-orange font-semibold font-heading md:mb-5 mb-3">
                REQUEST A CALLBACK
              </h3>
              <h4 className="md:text-[40px] text-2xl font-bold md:w-[420px] leading-[118%] md:mb-2 mb-6">
                We will contact in the shortest time.
              </h4>
              <p className="md:text-2xl text-xl mb-4 md:mb-0 font-semibold text-[#9291A1]">
                Monday to Friday, 9am-5pm.
              </p>
            </div>
            <div className='flex flex-col'>
              <input className='border-[#C5C5D2] border-[2px] rounded-md bg-inherit py-4 ps-5 mb-4 pe-[200px]' type="text" placeholder='Name'/>
              <input className='border-[#C5C5D2] border-[2px] rounded-md bg-inherit py-4 ps-5 mb-4' type="text" placeholder='Email' />
              <input className='border-[#C5C5D2] border-[2px] rounded-md bg-inherit pt-4 pb-[120px] ps-5 mb-[54px]' type="text" placeholder='Message' />
              <button className='py-3 bg-orange text-white flex gap-2 font-bold items-center justify-center rounded-md'>
                Send Message <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactform