import React from 'react'
import Container from '../Container/Container'

const Newsletter = () => {
  return (
    <>
      <section className="md:py-[85px] py-[60px] px-4 md:px-0 bg-[#222132]">
        <Container>
          <div className='md:flex justify-between'>
            <div>
              <h3 className="md:text-[40px] text-3xl font-bold text-white mb-4">
                Get an update every week
              </h3>
              <p className="text-[#C5C5D2] md:w-[500px] leading-[145%] mb-4 md:mb-0">
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-orange font-heading font-bold text-xl">
                SUBSCRIBE TO NEWSLETTER
              </h4>
              <div className="flex gap-3">
                <input
                  className="border-[#C5C5D2] border-[1px] rounded-md bg-inherit ps-[18px] py-4 md:pe-[177px]"
                  type="text"
                  placeholder="Enter your mail"
                />
                <button className="text-white bg-orange py-3 px-5 rounded-md font-bold md:text-xl text-[18px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Newsletter