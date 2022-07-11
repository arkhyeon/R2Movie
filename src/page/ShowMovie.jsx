import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import {api_key, env, genres} from "../lib/util";

function ShowMovie(props) {
  const { state } = useLocation();
  const [video, setVideo] = useState();

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = () => {
    let kind = "movie/";
    if (state.first_air_date) {
      kind = "tv/";
    }
    axios
      .get(
        env.VITE_API +
          "3/" +
          kind +
          state.id +
          "/videos?" +
          api_key +
          "&append_to_response=videos"
      )
      .then((res) => {
        console.log(res);
        setVideo(res.data.results[0].key);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <ShowMovieWrap>
        <iframe
          src={`https://www.youtube.com/embed/${video}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ShowMovieWrap>
      <MovieInfoWrap>
        <h1>{state.title || state.name}</h1>
        <MovieInfo>
          {state.release_date || state.first_air_date} |
          {state.genre_ids.map((genreId, i) => {
            if (i === 0) {
              return " " + genres[genreId];
            }
            return ", " + genres[genreId];
          })}
        </MovieInfo>
        <MovieInfo>{state.overview}</MovieInfo>
        <span>
          평점 : {Math.round(state.vote_average * 10) / 10} / 10 | 투표수 :{" "}
          {state.vote_count} | 인기도 : {Math.round(state.popularity * 10) / 10}
        </span>
      </MovieInfoWrap>
    </>
  );
}

const ShowMovieWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
  }
`;

const MovieInfoWrap = styled.div`
  width: calc(100% - 100px);
  padding: 0px 50px 30px;
  background: #141414;
  color: #ebebeb;
  & h1 {
    width: fit-content;
    display: flex;
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  & span {
    display: block;
    margin-top: 15px;
    font-size: 14px;
  }
`;

const MovieInfo = styled.p`
  width: fit-content;
  color: #ebebeb;
  margin-top: 15px;
`;

export default ShowMovie;
