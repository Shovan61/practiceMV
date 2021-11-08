import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";

function MovieCategory(props) {
  const movies = useSelector((state) => state.movies);
  const { name } = props.props;
  const { original, recomended, trending } = movies;

  let selectedMovie;

  if (name === "new") {
    selectedMovie = movies.new;
  } else if (name === "original") {
    selectedMovie = original;
  } else if (name === "recomended") {
    selectedMovie = recomended;
  } else if (name === "trending") {
    selectedMovie = trending;
  }

  return (
    <Wrapper>
      <h1>{name.toUpperCase()}</h1>
      <Container>
        {selectedMovie.map((cur, i) => (
          <MovieBox key={i} {...cur} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default MovieCategory;

const Wrapper = styled.div`
  height: 30vh;
  width: 100%;
  margin-top: 5rem;
  & h1 {
    margin-left: 3.8vw;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: 1.4rem;
  }
`;

const Container = styled.div`
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 5px;
  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
`;
