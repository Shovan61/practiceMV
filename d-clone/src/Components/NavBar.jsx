import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import home from "../images/home-icon.svg";
import movie from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";
import original from "../images/original-icon.svg";
import search from "../images/search-icon.svg";
import watchlist from "../images/watchlist-icon.svg";
import mine from "../images/mine.jpg";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const user = useSelector((state) => state);
  console.log(user);
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Navmenu>
        <Navcontent>
          <img src={home} alt="home" />
          <span>HOME</span>
        </Navcontent>
        <Navcontent>
          <img src={search} alt="search" />
          <span>search</span>
        </Navcontent>
        <Navcontent>
          <img src={watchlist} alt="watchlist" />
          <span>watchlist</span>
        </Navcontent>
        <Navcontent>
          <img src={original} alt="original" />
          <span>original</span>
        </Navcontent>
        <Navcontent>
          <img src={movie} alt="movie" />
          <span>movie</span>
        </Navcontent>
        <Navcontent>
          <img src={series} alt="series" />
          <span>series</span>
        </Navcontent>
      </Navmenu>
      <Profile>
        <img src={mine} alt="mine" />
      </Profile>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  height: 9vh;
  width: 100%;
  display: grid;
  grid-template-columns: 200px auto 200px;
  background-color: #040714;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9vh;
  & img {
    height: 50px;
  }
`;
const Navmenu = styled.div`
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Navcontent = styled.div`
  margin-top: 0.8rem;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  & img {
    height: 22%;
  }
  & span {
    text-transform: uppercase;
    font-size: 15px;
  }
`;

const Profile = styled.div`
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    margin-top: 0.5rem;
    border-radius: 50%;
    height: 50%;
  }
`;
