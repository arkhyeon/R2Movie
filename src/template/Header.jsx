import React, { useState } from "react";
import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSelector, termination } from "../redux/login";
import MenuIcon from "../component/MenuIcon";

function Header() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const loginUser = useSelector(loginSelector);

  return (
    <>
      <HeaderWrap className="header-wrap">
        <div className="menu-wrap">
          <NavLink to="/trend">
            <img src="assets/logo.png" alt="logo" />
          </NavLink>
          {pathname !== "/user" && (
            <ul
              className={isOpen ? "menu-on" : ""}
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
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
            </ul>
          )}
        </div>
        {pathname !== "/user" && (
          <div className="profile-wrap">
            <MenuIcon
              onClick={() => setIsOpen((prevState) => !prevState)}
              isOpen={isOpen}
            />
            <NavLink to="/user">
              <img
                onClick={() => dispatch(termination())}
                src={loginUser.profileImg}
              />
              <p onClick={() => dispatch(termination())}>{loginUser.name}</p>
            </NavLink>
          </div>
        )}
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div``;

const MenuWrap = styled.ul``;

const SubMenuWrap = styled.div``;

export default Header;
