import React from 'react'
import Contact from '../../assets/contactform.png'
import { FaPaperPlane } from "react-icons/fa";

const Contactform = () => {
  return (
    <>
      <section className="pb-[200px]">
        <div className="container mx-auto max-w-[870px]">
          <div className='flex gap-8 items-center'>
            <div>
              <img src={Contact} alt="" />
              <h3 className="text-2xl text-orange font-semibold font-heading mb-5">
                REQUEST A CALLBACK
              </h3>
              <h4 className="text-[40px] font-bold w-[420px] leading-[118%] mb-2">
                We will contact in the shortest time.
              </h4>
              <p className="text-2xl font-semibold text-[#9291A1]">
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