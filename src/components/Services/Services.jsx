import React from "react";
import Container from "../Container/Container";
import Servicecomp from "../Servicecomp/Servicecomp";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";

const Services = () => {
  const details = [
    {
      icon: `${Service1}`,

      title: "Business Services",

      para: "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.",

      li1: "Corporate goods",

      li2: "Shipment",

      li3: "Accesories",
    },
    {
      icon: `${Service2}`,

      title: "Statewide Services",

      para: "Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.",

      li1: "Personal items",

      li2: "Percels",

      li3: "Documents",
    },
    {
      icon: `${Service3}`,

      title: "Personal Services",

      para: "You can trust us to safely deliver your most sensitive documents to the specific area in a short time.",

      li1: "Gifts",

      li2: "Package",
      
      li3: "Documents",
    },
  ];
  return (
    <>
      <section className="md:pb-[170px] pb-[60px] px-4 md:px-0">
        <div className="text-center">
          <h2 className="font-heading md:text-[32px] text-[26px] font-semibold text-orange">
            SERVICES
          </h2>
          <p className="md:text-[40px] text-[24px] font-bold text-[#11111d] md:pb-[90px] pb-12">
            Our services for you
          </p>
        </div>
        <Container>
          <div className="md:flex justify-between gap-6 flex-wrap">
            {details.map((item) => (
              <Servicecomp
                icon={item.icon}
                title={item.title}
                para={item.para}
                li1={item.li1}
                li2={item.li2}
                li3={item.li3}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
