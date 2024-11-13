import React from 'react'
import Couner1 from '../../assets/counter1.png'

const Countercomp = ({icon, num, para}) => {
  return (
    <div>
      <img className="mb-3 mx-auto" src={icon} alt="" />
      <h3 className="text-orange text-[40px] font-bold text-center font-heading">
        {num}
      </h3>
      <p className="text-center text-[#464558] text-xl font-bold">{para}</p>
    </div>
  );
}

export default Countercomp