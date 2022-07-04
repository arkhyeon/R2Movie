import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/all";
import styled from "@emotion/styled";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getCookie } from "../lib/cookie";
import { useSelector } from "react-redux";

function Header() {
  const a = useLocation();
  const [b, setB] = useState(false);
  console.log(getCookie("R2USER"));
  useEffect(() => {
    setB(a.pathname !== "user");
  }, [b]);
  return (
    <HeaderWrap>
      <MenuWrap>
        <img src="src/resource/img/logo.png" alt="logo" />
        {b ? (
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
        ) : (
          b
        )}
      </MenuWrap>
      {getCookie("R2USER") && (
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

    &:hover {
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
