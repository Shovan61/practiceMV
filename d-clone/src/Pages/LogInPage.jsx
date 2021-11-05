import React from "react";
import styled from "styled-components";
import background from "../images/login-background.jpg";
import imgOne from "../images/cta-logo-one.svg";
import imgTwo from "../images/cta-logo-two.png";

function LogInPage() {
  return (
    <Wrapper>
      <Content>
        <img src={imgOne} alt="imgOne" />
        <Button>
          <span>GET THE DISNEY BUNDLE</span>
        </Button>

        <Span>
          Get Premier access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of the Disney+
          and the Disney Bundle will increase by $1.
        </Span>
        <SecondImage>
          <img src={imgTwo} alt="imgTwo" />
        </SecondImage>
      </Content>
    </Wrapper>
  );
  //   return <div className="wrpper"></div>;
}

export default LogInPage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Content = styled.section`
  height: 100%;
  max-width: 500px;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & img {
    max-width: 500px;
    height: 9.5vw;
  }
`;

const Button = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem 3rem;
  max-width: 500px;
  width: 40vw;
  background-color: #0e5fe3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s ease-in;
  &:hover {
    background-color: #0967ff;
  }
  & span {
    font-size: 18px;
    letter-spacing: 2px;
  }
`;

const Span = styled.span`
  margin-top: 2rem;
  font-size: 13px;
  letter-spacing: 1px;
  width: 100%;
  line-height: 21px;
`;

const SecondImage = styled.div`
  margin-top: 3rem;
  & img {
    width: 150%;
  }
`;
