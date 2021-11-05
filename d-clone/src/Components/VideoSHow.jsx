import React from "react";
import styled from "styled-components";
import { videoShow } from "../utilitis";
import VideoBox from "./VideoBox";

function VideoSHow() {
  return (
    <Wrapper>
      {videoShow.map((cur, i) => (
        <VideoBox {...cur} key={i} />
      ))}
    </Wrapper>
  );
}

export default VideoSHow;

const Wrapper = styled.div`
  height: 20vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
`;
