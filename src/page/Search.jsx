import React, {useEffect, useState} from "react";
import axios from "axios";
import {api_key, env} from "../lib/util";
import _ from "lodash";
import styled from "@emotion/styled";
import {MdSearch} from "react-icons/all";
import SearchMovie from "../component/SearchMovie";

let currentPage = 1;
let totalPage = 1;
let totalResult = 0;

function Search(props) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchContents();
  }, [page]);

  const handleScroll = () => {
    if (currentPage >= totalPage) {
      return;
    }
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("실행");
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => {
        return prev + 1;
      });
    }
  };

  // const handleScroll = _.debounce(() => {
  //   if (currentPage >= totalPage) {
  //     return;
  //   }
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   console.log("실행");
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPage((prev) => {
  //       return prev + 1;
  //     });
  //   }
  // }, 500);

  const searchContents = async (e) => {
    const query = document.querySelector("#searchInput").value;

    if (query === "") {
      setSearchMovies([]);
      return;
    }

    try {
      const { data } = await axios.get(
        env.VITE_API +
          "3/search/multi?" +
          api_key +
          "&page=" +
          page +
          "&query=" +
          query
      );
      totalPage = data.total_pages;
      currentPage = page;
      totalResult = data.total_results;
      const real = _.uniqBy(
        searchMovies.concat(actorFiltering(data.results)),
        "id"
      );
      setSearchMovies(real);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const actorFiltering = (resultArray) => {
    return resultArray.filter((result) => {
      return result.gender === undefined;
    });
  };

  return (
    <>
      <SearchInputWrap>
        <SearchInput
          id="searchInput"
          type="text"
          placeholder="Search..."
          onKeyUp={_.debounce(searchContents, 1000)}
          onKeyDown={() => {
            setPage(1);
            setSearchMovies([]);
          }}
        />
        <MdSearch />
      </SearchInputWrap>
      <MovieSearchWrap>
        {searchMovies?.length === 0 && <span>검색 결과가 없습니다.</span>}
        {searchMovies?.map((sm, index) => {
          return <SearchMovie key={sm.id} sm={sm} />;
        })}
      </MovieSearchWrap>
    </>
  );
}

const SearchInput = styled.input`
  width: 500px;
  background: #000;
  border: none;
  color: #ebebeb;
  font-size: 48px;

  &::placeholder {
    color: #ebebeb;
  }

  &:focus-visible {
    outline: none;
  }
`;

const SearchInputWrap = styled.div`
  width: 550px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;

  & svg {
    color: #ebebeb;
    font-size: 48px;
  }
`;

const MovieSearchWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  align-content: flex-start;
  margin-bottom: 50px;

  & span {
    font-size: 48px;
    color: #676aa8;
    font-weight: 700;
  }
`;

export default Search;
