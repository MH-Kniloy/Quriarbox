import React from 'react'
import Container from '../Container/Container'
import Quote from '../../assets/quote.png'
import Testicomp from '../Testicomp/Testicomp';
import Reactslick from '../Reactslick/Reactslick';

const Testimonial = () => {
  return (
    <>
      <section className="pb-[270px]">
        <Container>
          <div className='flex justify-center gap-10 pb-[90px]'>
            <img src={Quote} alt="" />
            <div className='flex flex-col justify-end pe-[150px]'>
              <h3 className='text-[32px] text-orange font-heading font-bold text-center'>TESTIMONIAL</h3>
              <p className='text-[#11111d] text-[40px] font-bold'>Our Awesome Clients</p>
            </div>
          </div>
          
             <Reactslick>

          <div className='w-[870px] mx-auto'>
            <Testicomp />
          </div>
             </Reactslick>
          
        </Container>
      </section>
    </>
  );
}

export default Testimonial