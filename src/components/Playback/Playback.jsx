import React from 'react'
import Container from '../Container/Container'
import Play from '../../assets/playbtn.png'
const Playback = () => {
  return (
    <>
      <section className="pb-[170px]">
        <Container>
          <div className="bg-playbg pt-[126px] pb-[168px] px-[320px] bg-no-repeat bg-cover bg-center">
            <img className='mb-5 mx-auto' src={Play} alt="" />
            <h3 className='text-[32px] text-orange font-bold font-heading text-center mb-2'>FASTEST DELIVERY</h3>
            <p className='text-[24px] leading-[120%] text-white text-center w-[570px] mx-auto'>
              
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