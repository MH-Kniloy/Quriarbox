import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reactslick = ({children}) => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3>
                {children}
            </h3>
          </div>
          <div>
            <h3>
                {children}
            </h3>
          </div>
          
          
        </Slider>
      </div>
    </>
  );
}

export default Reactslick