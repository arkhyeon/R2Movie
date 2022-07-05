import React from "react";
import { MdSearch } from "react-icons/all";
import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderWrap>
      <MenuWrap>
        <img src="src/resource/img/logo.png" alt="logo" />
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
          </>
        )}
      </MenuWrap>
      {pathname !== "/user" && (
        <>
          <SubMenuWrap>
            <MdSearch />
            <img src="src/resource/img/user1.jpg" alt="?" />
            <p>User Name</p>
          </SubMenuWrap>
        </>
      )}
    </HeaderWrap>
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
  & a {
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
    width: 100px;
  }

  & svg {
    width: 46px;
    height: 28px;
    margin: 14px auto;
    cursor: pointer;
  }
`;

export default Header;
