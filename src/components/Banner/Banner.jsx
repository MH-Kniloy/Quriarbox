
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Container from '../Container/Container';
import Bannerimg from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
      <section className="py-[190px] bg-background">
        <Container>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className="w-[516px] text-[#261134] text-[50px] leading-[120%] mb-4">
                A trusted provider of{" "}
                <span className="font-bold">courier services.</span>
              </h1>
              <p className="mb-10 w-[330px] text-[#4d4d4d] text-xl leading-[120%]">
                We deliver your products safely to your home in a reasonable
                time.
              </p>
              <button className="py-3 px-5 bg-orange text-white text-xl font-bold font-heading rounded-md flex items-center">
                Get started
                <FaArrowRight className="ms-2" />
              </button>
            </div>
            <div>
                <img src={Bannerimg} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Banner