import React from "react";
import styled from "styled-components";

function MovieBox(props) {
  console.log(props);
  const { id, titleImg, backgroundImg } = props;

  return (
    <Wrapper>
      <img src={backgroundImg} alt={id} />
    </Wrapper>
  );
}

export default MovieBox;

const Wrapper = styled.div`
  height: 60%;
  width: 70%;
  border: 3px solid #333;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease-in;
  box-shadow: 0px 15px 9px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 15px 9px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 15px 9px -4px rgba(0, 0, 0, 0.75);
  &:hover {
    border: 3px solid #888;
    transform: scale(1.02);
    & img {
      transform: scale(1.2);
    }
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 6s ease-in;
  }
`;
