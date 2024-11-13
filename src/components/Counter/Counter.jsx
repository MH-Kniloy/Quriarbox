import React from 'react'
import Container from '../Container/Container'
import Countercomp from '../Countercomp/Countercomp'
import Counter1 from '../../assets/counter1.png'
import Counter2 from '../../assets/counter2.png'
import Counter3 from '../../assets/counter3.png'
import Counter4 from '../../assets/counter4.png'
import Counter5 from '../../assets/counter5.png'

const Counter = () => {
    const details = [
      {
        icon: `${Counter1}`,
        num: "26+",
        para: "Awards won",
      },
      {
        icon: `${Counter2}`,
        num: "65+",
        para: "States covered",
      },
      {
        icon: `${Counter3}`,
        num: "689K+",
        para: "Happy clients",
      },
      {
        icon: `${Counter4}`,
        num: "130M+",
        para: "Goods delivered",
      },
      {
        icon: `${Counter5}`,
        num: "130M+",
        para: "Business hours",
      },
    ];
  return (
    <>
    
    <section className='pb-[170px]'>
        <Container>
            <div className='flex justify-between items-end'>
                {
                    details.map((item)=>(
                        <Countercomp icon={item.icon} num={item.num} para={item.para} />
                    ))
                }
            </div>
        </Container>
    </section>
    
    </>
  )
}

export default Counter