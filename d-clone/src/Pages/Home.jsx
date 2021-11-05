import React from "react";
import { NavBar } from "../Components";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
