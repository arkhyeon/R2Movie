import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {librarySelector} from "../redux/library";
import MovieSlider from "../component/MovieSlider";
import MovieModal from "../component/MovieModal";
import styled from "@emotion/styled";
import axios from "axios";
import {api_key, env} from "../lib/util";

function Library(props) {
  const libraries = useSelector(librarySelector);
  const [view, setView] = useState(0);
  const [recommend, setRecommend] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (libraries.length !== 0) {
      getRecommendContents();
    }
  }, []);

  const getRecommendContents = () => {
    const recommendId = getRandomIntInclusive(0, libraries.length);

    let kind = "movie/" + libraries[recommendId].id + "/";
    if (libraries[recommendId].first_air_date) {
      kind = "tv/" + libraries[recommendId].id + "/";
    }

    axios
      .all([
        axios.get(env.VITE_API + "3/" + kind + "recommendations?" + api_key),
        axios.get(env.VITE_API + "3/" + kind + "similar?" + api_key),
      ])
      .then(
        axios.spread((rec, sim) => {
          setRecommend(posterFiltering(rec.data.results));
          setSimilar(posterFiltering(sim.data.results));
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  const posterFiltering = (resultArray) => {
    return resultArray.filter((result) => {
      return result.poster_path !== null;
    });
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값도 포함, 최솟값도 포함
  };

  return (
    <SlideWrap>
      {view === 1 && <MovieModal />}
      <p>My Library</p>
      {libraries.length === 0 ? (
        <NoContents>저장된 컨텐츠가 없습니다.</NoContents>
      ) : (
        <MovieSlider contents={libraries} setView={setView} num={1} />
      )}
      {view === 2 && <MovieModal />}
      <p>Recommend Contents</p>
      <MovieSlider contents={recommend} setView={setView} num={2} />
      {view === 3 && <MovieModal />}
      <p>Similar Contents</p>
      <MovieSlider contents={similar} setView={setView} num={3} />
    </SlideWrap>
  );
}
const SlideWrap = styled.div`
  margin: 15px 15px 25px;

  & > p {
    font-size: 28px;
    color: #ebebeb;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const NoContents = styled.span`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #ebebeb;
  font-weight: 600;
`;

export default Library;
