import React from 'react'
import Container from '../Container/Container'
import Quote from '../../assets/quote.png'
import Testicomp from '../Testicomp/Testicomp';
import Reactslick from '../Reactslick/Reactslick';

const Testimonial = () => {
  return (
    <>
      <section className="md:pb-[270px] pb-[80px]">
        <Container>
          <div className='flex justify-center md:gap-10 gap-6 md:pb-[90px] pb-[80px] me-4 md:me-0'>
           <img className='w-[50px] md:w-auto' src={Quote} alt="" />
            <div className='md:flex flex-col justify-center md:pe-[150px]'>
              <h3 className='md:text-[32px] text-2xl text-orange font-heading font-bold text-center md:pb-4 '>TESTIMONIAL</h3>
              <p className='text-[#11111d] md:text-[40px] text-xl font-bold'>Our Awesome Clients</p>
            </div>
          </div>
          
             <Reactslick>

          <div className='md:w-[870px] md:mx-auto mx-4'>
            <Testicomp />
          </div>
             </Reactslick>
          
        </Container>
      </section>
    </>
  );
}

export default Testimonial