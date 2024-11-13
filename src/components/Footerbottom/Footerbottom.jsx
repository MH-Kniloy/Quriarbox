import React from 'react'
import Container from '../Container/Container';

const Footerbottom = () => {
  return (
    <>
      <section className="py-8 bg-[#222132]">
        <Container>
          <div className="flex justify-between">
            <p className="text-[14px] text-[#DBDBE9] font-medium">
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