import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import { api_key, env, genres } from "../lib/util";
import Badge from "../component/badge";
import { MdPerson } from "react-icons/md";

function ShowMovie() {
  const { state } = useLocation();
  const [video, setVideo] = useState();

  useEffect(() => {
    console.log(state);
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
      .then((res) => setVideo(res.data.results[0].key))
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
        />
      </ShowMovieWrap>
      <MovieInfoWrap>
        <h1>{state.title || state.name}</h1>
        <MovieInfo>
          <Badge>{state.release_date || state.first_air_date}</Badge>
          {state.genre_ids.map((genreId) => (
            <Badge key={genreId}>{genres[genreId]}</Badge>
          ))}
        </MovieInfo>
        <MovieInfo>{state.overview}</MovieInfo>
        <MovieInfo>
          <Badge>
            {Math.round(state.vote_average * 10) / 10} / 10
            <MdPerson size={18} /> {state.vote_count}
          </Badge>
        </MovieInfo>
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
  padding: 0 calc(15px + 2vw) 30px;
  color: #ebebeb;
`;

const MovieInfo = styled.p`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default ShowMovie;
