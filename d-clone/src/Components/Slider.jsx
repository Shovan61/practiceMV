import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../images/slider-badag.jpg";
import slider2 from "../images/slider-badging.jpg";
import slider3 from "../images/slider-scale.jpg";
import slider4 from "../images/slider-scales.jpg";

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
    slickNext: true,
    slickPrev: true,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <Container>
          <img src={slider1} alt="slider1" />
        </Container>
        <Container>
          <img src={slider2} alt="slider2" />
        </Container>
        <Container>
          <img src={slider3} alt="slider3" />
        </Container>
        <Container>
          <img src={slider4} alt="slider4" />
        </Container>
      </Slider>
    </Wrapper>
  );
}

export default SliderImage;

const Wrapper = styled(Slider)``;

const Container = styled.div`
  & img {
    width: 100vw;
    -webkit-box-shadow: 2px 19px 6px -6px rgba(255, 18, 54, 0.424);
    box-shadow: 2px 19px 6px -6px rgba(4, 0, 29, 0.86);
  }
`;
