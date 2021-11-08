import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <span>Walt Disney</span>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  height: 8vh;
  width: 100%;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */

  & span {
    font-family: "WaltographRegular";
    font-weight: normal;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    height: 100%;
    letter-spacing: 1px;
  }
`;
