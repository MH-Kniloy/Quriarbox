import React from 'react'
import { FaStar } from "react-icons/fa";
import Woman from '../../assets/testimonial.png'

const Testicomp = () => {
  return (
    <>
      <div className="bg-white rounded-md p-[40px]">
        <h3 className="text-orange font-bold font-heading text-[24px] mb-2">
          Fantastic service!
        </h3>
        <p className="text-[#464558] leading-[145%] text-justify mb-7">
          I purchased a phone from an e-commerce site, and this courier service
          provider assisted me in getting it delivered to my home. I received my
          phone within one day, and I was really satisfied with their service
          when I received it. They are really quick and dependable. They give me
          with the option of real-time delivery status, which allows me to track
          the progress of my goods delivery. I get a lot of questions from call
          center support and key account managers. They come highly recommended.
          Confidently say that they are really reliable.
        </p>
        <div className='flex justify-between'>
          <div className="flex gap-2">
            <FaStar className="text-orange text-[20px]" />
            <FaStar className="text-orange text-[20px]" />
            <FaStar className="text-orange text-[20px]" />
            <FaStar className="text-orange text-[20px]" />
            <FaStar className="text-orange text-[20px]" />
          </div>
          <div className='flex items-center'>
            <div>
              <h4 className="text-[#464558] font-bold text-end">Yves Tanguy</h4>
              <h5 className="text-[#464558]">Chief Executive, DLF</h5>
            </div>
            <div className='ms-3'>
              <img className="rounded-full" src={Woman} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testicomp