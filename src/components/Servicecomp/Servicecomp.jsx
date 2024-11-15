import React from 'react'

const Servicecomp = ({icon, title, para, li1, li2, li3}) => {
  return (
    <>
      
        <div className="bg-white md:pt-[67px] pt-[40px] md:px-[62px] px-[34px] pb-[50px] mb-8 md:mb-0">
          <img className="mx-auto mb-[30px]" src={icon} alt="" />
          <h3 className="text-center mb-8 text-[25px] font-bold">
            {title}
          </h3>
          <p className="text-[#7B7A8B] leading-[145%] w-[300px] mb-9">
            {para}
          </p>
          <ul className="list-disc marker:text-orange marker:text-2xl ms-5 mb-[50px]">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
          </ul>
          <button className="text-orange font-heading text-xl font-bold border-orange border-[2px] rounded-md py-3 md:px-[90px] px-[45px] ms-[50px] md:ms-0 hover:bg-orange hover:text-white transition-all duration-500">
            Learn More
          </button>
        </div>
      
    </>
  );
}

export default Servicecomp