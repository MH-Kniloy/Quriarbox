import React from 'react'
import Container from '../Container/Container'
import Play from '../../assets/playbtn.png'
const Playback = () => {
  return (
    <>
      <section className="md:pb-[170px] pb-[80px] ">
        <Container>
          <div className="bg-playbg md:pt-[126px] md:pb-[168px] md:px-[320px] py-[60px] px-4 bg-no-repeat bg-cover bg-center">
            <img className='mb-5 mx-auto w-[80px] md:w-auto' src={Play} alt="" />
            <h3 className='md:text-[32px] text-2xl text-orange font-bold font-heading text-center mb-2'>FASTEST DELIVERY</h3>
            <p className='md:text-[24px] leading-[120%] text-white text-center md:w-[570px] mx-auto'>
              
              You can get your valuable item in the fastest period of time with
              safety. Because your emergency is our first priority.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Playback