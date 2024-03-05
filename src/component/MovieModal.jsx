import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailSelector, setMovieDetail } from "../redux/movieDetail";
import { genres } from "../lib/util";
import { MdPerson, MdPlayArrow, MdPlaylistAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addLibrary, librarySelector, removeLibrary } from "../redux/library";
import * as _ from "lodash";
import Badge from "./badge";

function MovieModal() {
  const navigate = useNavigate();
  const movieDetail = useSelector(movieDetailSelector);
  const library = useSelector(librarySelector);
  const dispatch = useDispatch();

  const enterMoviePlay = () => {
    navigate("/showMovie", { state: { ...movieDetail } });
  };

  const setLibrary = () => {
    if (!_.find(library, { id: movieDetail.id })) {
      dispatch(addLibrary(movieDetail));
    } else {
      dispatch(removeLibrary(movieDetail.id));
      dispatch(setMovieDetail({ id: 0 }));
    }
  };

  return (
    <>
      {movieDetail.id !== 0 && (
        <ModalContent className="modal-content" url={movieDetail.backdrop_path}>
          <MovieInfoWrap>
            <h1 onClick={enterMoviePlay}>
              {movieDetail.title || movieDetail.name}
              <MdPlayArrow color="#676aa8" />
            </h1>
            <MovieInfo>
              <Badge>
                {movieDetail.release_date || movieDetail.first_air_date}
              </Badge>
              {_.find(library, { id: movieDetail.id }) ? (
                <b onClick={setLibrary}>
                  <MdPlaylistAdd size={24} /> 보관함 제거
                </b>
              ) : (
                <b onClick={setLibrary}>
                  <MdPlaylistAdd size={24} /> 보관함 추가
                </b>
              )}
            </MovieInfo>
            <MovieInfo>
              {movieDetail.genre_ids.map((genreId) => (
                <Badge key={genreId}>{genres[genreId]}</Badge>
              ))}
            </MovieInfo>
            <MovieInfo>
              {movieDetail.overview?.length > 80
                ? movieDetail.overview.slice(0, 80) + "..."
                : movieDetail.overview}
            </MovieInfo>
            <MovieInfo>
              <Badge>
                {Math.round(movieDetail.vote_average * 10) / 10} / 10
                <MdPerson size={18} /> {movieDetail.vote_count}
              </Badge>
            </MovieInfo>
          </MovieInfoWrap>
        </ModalContent>
      )}
    </>
  );
}

const ModalContent = styled.div`
  width: 100%;
  height: 500px;
  background: url(${(props) => {
      return "https://image.tmdb.org/t/p/original" + props.url;
    }})
    no-repeat;
  background-size: 100%;
`;

const MovieInfoWrap = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px calc(0.965rem + 1.8vw) 12px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  color: #ebebeb;
  & h1 {
    width: fit-content;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 15px;
    border: 1px solid #676aa8;
    padding-left: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #ebebeb;
      color: #676aa8;
    }
  }
`;

const MovieInfo = styled.div`
  max-width: 500px;
  color: #ebebeb;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 8px;

  & b {
    display: flex;
    cursor: pointer;
    &:hover {
      color: #676aa8;
    }
  }
`;

export default MovieModal;
