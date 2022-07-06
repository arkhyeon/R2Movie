import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api_key, env } from "../../lib/util";
import MoviePoster from "../../component/MoviePoster";
import styled from "@emotion/styled";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/all";
import Slider from "react-slick";

function Trend() {
  const [movies, setMovies] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  useEffect(() => {
    // getMovie();
  }, []);

  const getMovie = () => {
    axios
      .get(env.VITE_API + "3/trending/all/day?" + api_key)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const settings = {
    infinite: true,
    slidesToScroll: 7,
    variableWidth: true,
    nextArrow: (
      <SliderButton className="leftBtn">
        <MdKeyboardArrowLeft size={48} />
      </SliderButton>
    ),
    prevArrow: (
      <SliderButton className="rightBtn">
        <MdKeyboardArrowLeft size={48} />
      </SliderButton>
    ),
  };
  return (
    <>
      <TrendWrap>
        <Slider {...settings}>
          {movies.map((movie) => {
            return <MoviePoster key={movie} movie={movie} />;
          })}
        </Slider>
      </TrendWrap>
    </>
  );
}

const TrendWrap = styled.div`
  & div {
    background-color: white;
  }
`;

const SliderWrap = styled.div`
  position: absolute;
  display: flex;
  left: 0px;
  transition: 1s;
  transition-timing-function: ease-in-out;
`;

const SliderButton = styled.div`
  width: 50px;
  height: 225px;
  color: #ebebeb;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
  z-index: 1;
  &:hover {
    opacity: 1;
  }

  &.leftBtn {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 0px 10px 10px 0px;
  }

  &.rightBtn {
    right: 0px;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(95, 95, 95, 0) 100%
    );
    border-radius: 10px 0px 0px 10px;
  }
`;

export default Trend;
