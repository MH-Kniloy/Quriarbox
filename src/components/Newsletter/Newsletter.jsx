import React from 'react'
import Container from '../Container/Container'

const Newsletter = () => {
  return (
    <>
      <section className="py-[85px] bg-[#222132]">
        <Container>
          <div className='flex justify-between'>
            <div>
              <h3 className="text-[40px] font-bold text-white mb-2">
                Get an update every week
              </h3>
              <p className="text-[#C5C5D2] w-[500px] leading-[145%]">
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
                  className="border-[#C5C5D2] border-[1px] rounded-md bg-inherit ps-[18px] py-4 pe-[177px]"
                  type="text"
                  placeholder="Enter your mail"
                />
                <button className="text-white bg-orange py-3 px-5 rounded-md font-bold text-xl">
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