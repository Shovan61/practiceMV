import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

function VideoBox(props) {
  const { image, video } = props;
  let videoRef = useRef();
  const [isHover, setisHover] = useState(false);

  useEffect(() => {
    if (isHover) {
      return videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isHover]);

  return (
    <Box
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img src={image} alt="img" />
      <video ref={videoRef} src={video} loop muted={true}></video>
    </Box>
  );
}

export default VideoBox;

const Box = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  border: 2px solid #222;
  -webkit-box-shadow: 2px 9px 23px 2px #000000;
  box-shadow: 2px 9px 23px 2px #000000;

  &:hover {
    border: none;
    & video {
      display: block;
    }
  }
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 10;
  }

  & video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    display: none;
  }
`;
