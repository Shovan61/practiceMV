import React from "react";
import { NavBar, Slider } from "../Components";
import styled from "styled-components";
import background from "../images/home-background.png";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Slider />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    z-index: -2;
  }
`;
