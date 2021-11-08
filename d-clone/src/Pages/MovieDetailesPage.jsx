import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import group from "../images/group-icon.png";
import playBlack from "../images/play-icon-black.png";
import playWhite from "../images/play-icon-white.png";

function MovieDetailesPage() {
  let { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const { original, recomended, trending } = movies;
  const [movie, setmovie] = useState(null);
  let history = useHistory();

  useEffect(() => {
    getMovie();
  }, [movies]);

  const getMovie = () => {
    let neW = movies.new;
    const allMovies = [...neW, ...original, ...recomended, ...trending];

    let found;

    allMovies.forEach((curObj) => {
      if (curObj.id === id) {
        found = curObj;
      }
    });

    setmovie(found);
  };

  if (movie === undefined || movie === null) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  } else {
    return (
      <Wrapper background={movie.backgroundImg}>
        <TitleImage>
          <img src={movie.titleImg} alt="titleImg" />
        </TitleImage>
        <Logos>
          <ButtonWhite>
            <img src={playBlack} alt="playBlack" />
            <span>Play</span>
          </ButtonWhite>
          <Button>
            <img src={playWhite} alt="playBlack" />
            <span>Trailer</span>
          </Button>
          <Group>
            <img style={{ height: "50px" }} src={group} alt="group" />
          </Group>
        </Logos>
        <Subtitle>
          <span>{movie.subTitle}</span>
        </Subtitle>
        <Description>
          <span>{movie.description}</span>
        </Description>
        <GoBack onClick={() => history.push("/home")}>GO BACK</GoBack>
      </Wrapper>
    );
  }
}

export default MovieDetailesPage;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 8rem;
  height: 100vh;
  width: 100%;
  position: relative;
  background: url(${(props) => props.background}) no-repeat center center /
    cover;
`;
const TitleImage = styled.div`
  height: 25vh;
  width: 25vw;
  & img {
    height: 100%;
    width: 100%;
  }
`;
const Logos = styled.div`
  height: 12vh;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid white; */
`;

const ButtonWhite = styled.div`
  height: 90px;
  width: 170px;
  background-color: rgba(250, 235, 235, 0.959);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
  & span {
    color: black;
    font-size: 1.5rem;
  }
`;
const Button = styled(ButtonWhite)`
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #666;
  & span {
    color: white;
    font-size: 1.5rem;
  }
`;
const Group = styled.div`
  padding: 1rem;
  border: 1px solid white;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
`;
const Subtitle = styled.div`
  width: 700px;
  margin-top: 1.2rem;
  & span {
    font-size: 18px;
  }
`;
const Description = styled.div`
  width: 700px;
  margin-top: 2.5rem;
  & span {
    font-size: 15px;
  }
`;
const GoBack = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #161638c3;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: 0.5px solid white;
  transition: all 0.05s ease-in;
  &:hover {
    background-color: #ddddf5c3;
    color: black;
    border: none;
  }
`;
