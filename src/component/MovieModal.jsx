import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setDisplay } from "../redux/modal";
import { movieDetailSelector, setMovieDetail } from "../redux/movieDetail";

function MovieModal() {
  const modalView = useSelector(modalSelector);
  const movieDetail = useSelector(movieDetailSelector);
  const dispatch = useDispatch();
  console.log(movieDetail);
  return (
    <ModalWrap style={{ display: `${modalView}` }}>
      <ModalContent>
        <MainImg
          src={
            "https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path
          }
        />
        <p>{movieDetail.title}</p>
        <p>{movieDetail.overview}</p>
        <p>{movieDetail.release_date}</p>
        <p>{movieDetail.genre_ids}</p>
        <p>{movieDetail.vote_count}</p>
        <p>{movieDetail.vote_average}</p>
        <p>{movieDetail.popularity}</p>
      </ModalContent>
      <ModalBack
        onClick={() => {
          dispatch(setDisplay("none"));
          dispatch(setMovieDetail({}));
        }}
      ></ModalBack>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  position: relative;
  z-index: 9999;
  color: #ebebeb;
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #000;
  opacity: 0.4;
`;

const ModalContent = styled.div`
  width: 724px;
  height: 600px;
  background-color: azure;
  position: fixed;
  top: calc(50% - 300px);
  left: calc(50% - 362px);
  z-index: 1;
  background-color: #282c34;
`;

const MainImg = styled.img`
  width: 724px;
  height: 300px;
`;

export default MovieModal;
