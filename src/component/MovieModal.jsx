import React from "react";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import {movieDetailSelector, setMovieDetail} from "../redux/movieDetail";
import {genres} from "../lib/util";
import {MdPlayArrow, MdPlaylistAdd} from "react-icons/all";
import {useNavigate} from "react-router-dom";
import {addLibrary, librarySelector, removeLibrary} from "../redux/library";
import * as _ from "lodash";

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
        <ModalWrap>
          <ModalContent url={movieDetail.backdrop_path}>
            <MovieInfoWrap>
              <h1 onClick={enterMoviePlay}>
                {movieDetail.title || movieDetail.name}
                <MdPlayArrow size={76} color="#676aa8" />
              </h1>
              <MovieInfo>
                {movieDetail.release_date || movieDetail.first_air_date} |
                {movieDetail.genre_ids.map((genreId, i) => {
                  if (i === 0) {
                    return " " + genres[genreId];
                  }
                  return ", " + genres[genreId];
                })}{" "}
                {_.find(library, { id: movieDetail.id }) ? (
                  <>
                    |{" "}
                    <b onClick={setLibrary}>
                      <MdPlaylistAdd size={24} /> 보관함 제거
                    </b>
                  </>
                ) : (
                  <>
                    |{" "}
                    <b onClick={setLibrary}>
                      <MdPlaylistAdd size={24} /> 보관함 추가
                    </b>
                  </>
                )}
              </MovieInfo>
              <MovieInfo>
                {movieDetail.overview?.length > 400
                  ? movieDetail.overview.slice(0, 400) + "..."
                  : movieDetail.overview}
              </MovieInfo>
              <span>
                평점 : {Math.round(movieDetail.vote_average * 10) / 10} / 10 |
                투표수 : {movieDetail.vote_count} | 인기도 :{" "}
                {Math.round(movieDetail.popularity * 10) / 10}
              </span>
            </MovieInfoWrap>
          </ModalContent>
        </ModalWrap>
      )}
    </>
  );
}

const ModalWrap = styled.div``;

const ModalContent = styled.div`
  width: 100%;
  height: 500px;
  background: url(${(props) => {
      return "https://image.tmdb.org/t/p/original" + props.url;
    }}),
    no-repeat;
  background-size: 100% 500px;
`;

const MovieInfoWrap = styled.div`
  width: calc(100% - 100px);
  height: 450px;
  padding: 50px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  color: #ebebeb;
  & h1 {
    width: fit-content;
    display: flex;
    font-size: 56px;
    font-weight: 700;
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

  & span {
    display: block;
    margin-top: 15px;
    font-size: 14px;
  }

  & p:nth-of-type(1) {
    width: fit-content;
  }
`;

const MovieInfo = styled.p`
  width: 500px;
  color: #ebebeb;
  margin-top: 15px;
  display: flex;

  & svg {
    margin: 0 5px;
  }

  & b {
    display: flex;
    cursor: pointer;
    &:hover {
      color: #676aa8;
    }
  }
`;

export default MovieModal;
