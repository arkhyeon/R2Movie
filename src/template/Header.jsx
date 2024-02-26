import React from "react";
import styled from "@emotion/styled";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginSelector, termination} from "../redux/login";

function Header() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const loginUser = useSelector(loginSelector);

  return (
    <>
      <HeaderWrap>
        <MenuWrap>
          <NavLink to="/trend">
            <img src="/logo.png" alt="logo" />
          </NavLink>
          {pathname !== "/user" && (
            <>
              <NavLink to="/trend">
                <li>Trend</li>
              </NavLink>
              <NavLink to="/movie">
                <li>Movie</li>
              </NavLink>
              <NavLink to="/series">
                <li>Series</li>
              </NavLink>
              <NavLink to="/library">
                <li>Library</li>
              </NavLink>
              <NavLink to="/search">
                <li>Search</li>
              </NavLink>
            </>
          )}
        </MenuWrap>
        {pathname !== "/user" && (
          <>
            <SubMenuWrap>
              <NavLink to="/user">
                <img
                  onClick={() => dispatch(termination())}
                  src={loginUser.profileImg}
                />
                <p onClick={() => dispatch(termination())}>{loginUser.name}</p>
              </NavLink>
            </SubMenuWrap>
          </>
        )}
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
`;

const MenuWrap = styled.ul`
  display: flex;
  text-align: center;
  line-height: 56px;
  & a:nth-of-type(n + 2) {
    color: #ebebeb;
    font-size: 18px;
    font-weight: 600;
    padding: 0 3rem;

    &:hover,
    &.active {
      color: #676aa8;
    }
  }
`;

const SubMenuWrap = styled.div`
  display: flex;
  line-height: 56px;
  color: #ebebeb;
  margin-right: 1.5rem;
  & img {
    width: 40px;
    height: 40px;
    margin: 8px 8px 0 0;
    border-radius: 100%;
  }

  & p {
    width: fit-content;
  }

  & a {
    display: flex;
    color: #ebebeb;
  }
`;

export default Header;
