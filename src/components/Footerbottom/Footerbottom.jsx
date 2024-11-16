import React from 'react'
import Container from '../Container/Container';

const Footerbottom = () => {
  return (
    <>
      <section className="py-8 bg-[#222132]">
        <Container>
          <div className="md:flex justify-between text-center md:text-start">
            <p className="text-[14px] text-[#DBDBE9] font-medium mb-2 md:mb-0">
              All rights Reserved © Your Company, 2021
            </p>
            <h6 className="text-[14px] text-[#DBDBE9] font-medium">
              Made with heart by
              <span className='font-bold text-orange ms-1'>ThemeWagon</span>
            </h6>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footerbottom