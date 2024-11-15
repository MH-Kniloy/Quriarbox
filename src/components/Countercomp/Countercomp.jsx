import React from 'react'
import CountUp from 'react-countup';

const Countercomp = ({icon, num,numAdd, para}) => {
  return (
    <div>
      <img className="mb-3 mx-auto" src={icon} alt="" />
      <h3 className="text-orange text-[40px] font-bold text-center font-heading">
        <CountUp end={num} duration={3} enableScrollSpy={true} scrollSpyDelay={500} />
        {numAdd}
      </h3>
      <p className="text-center text-[#464558] text-xl font-bold">{para}</p>
    </div>
  );
}

export default Countercomp