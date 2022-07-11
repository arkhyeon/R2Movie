import React, {useEffect, useState} from "react";
import axios from "axios";
import {api_key, env} from "../../lib/util";
import MovieSlider from "../../component/MovieSlider";
import styled from "@emotion/styled";
import MovieModal from "../../component/MovieModal";
import {useLocation} from "react-router-dom";

function MovieMain() {
  const [firstLine, setFirstLine] = useState([]);
  const [secondLine, setSecondLine] = useState([]);
  const [thirdLine, setThirdLine] = useState([]);
  const [view, setView] = useState(0);
  const [title, setTitle] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/trend") {
      getTrend();
      setTitle(["New Contents", "Today's Trends", "Weekly Trends"]);
    } else if (pathname === "/movie") {
      getMovie();
      setTitle(["Popular Contents", "Now Showing", "Top Rated Movies"]);
    } else if (pathname === "/series") {
      getSeries();
      setTitle(["Popular Series", "On The Air", "Top Rated Series"]);
    }
  }, [pathname]);

  const getTrend = () => {
    axios
      .all([
        axios.get(env.VITE_API + "3/movie/upcoming?" + api_key),
        axios.get(env.VITE_API + "3/trending/all/day?" + api_key),
        axios.get(env.VITE_API + "3/trending/all/week?" + api_key),
      ])
      .then(
        axios.spread((upcoming, day, week) => {
          setFirstLine(upcoming.data.results);
          setSecondLine(day.data.results);
          setThirdLine(week.data.results);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const getMovie = () => {
    axios
      .all([
        axios.get(env.VITE_API + "3/movie/popular?" + api_key),
        axios.get(env.VITE_API + "3/movie/now_playing?" + api_key),
        axios.get(env.VITE_API + "3/movie/top_rated?" + api_key),
      ])
      .then(
        axios.spread((popular, now, top) => {
          setFirstLine(popular.data.results);
          setSecondLine(now.data.results);
          setThirdLine(top.data.results);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const getSeries = () => {
    axios
      .all([
        axios.get(env.VITE_API + "3/tv/popular?" + api_key),
        axios.get(env.VITE_API + "3/tv/on_the_air?" + api_key),
        axios.get(env.VITE_API + "3/tv/top_rated?" + api_key),
      ])
      .then(
        axios.spread((pop, air, rated) => {
          setFirstLine(pop.data.results);
          setSecondLine(air.data.results);
          setThirdLine(rated.data.results);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <SlideWrap>
        {view === 1 && <MovieModal />}
        <p>{title[0]}</p>
        <MovieSlider
          contents={firstLine}
          setView={setView}
          num={1}
        ></MovieSlider>
        {view === 2 && <MovieModal />}
        <p>{title[1]}</p>
        <MovieSlider
          contents={secondLine}
          setView={setView}
          num={2}
        ></MovieSlider>
        {view === 3 && <MovieModal />}
        <p>{title[2]}</p>
        <MovieSlider
          contents={thirdLine}
          setView={setView}
          num={3}
        ></MovieSlider>
      </SlideWrap>
    </>
  );
}

const SlideWrap = styled.div`
  margin: 0px 15px 25px;

  & > p {
    font-size: 28px;
    color: #ebebeb;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export default MovieMain;
