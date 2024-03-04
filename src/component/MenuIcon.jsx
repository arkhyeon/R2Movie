import React from "react";
import styled from "@emotion/styled";

function MenuIcon({ onClick, isOpen }) {
  return (
    <MenuIconWrap
      onClick={onClick}
      className={"menu-icon-wrap " + (isOpen ? "menu-open" : "")}
    >
      <MenuIconItem />
      <MenuIconItem />
      <MenuIconItem />
    </MenuIconWrap>
  );
}

const MenuIconWrap = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuIconItem = styled.div`
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 100ms ease-in-out;

  .menu-open &:nth-of-type(1) {
    transition: all 100ms ease-in-out;
    transform: rotate(45deg);
    transform-origin: top left;
    width: 36px;
  }
  .menu-open &:nth-of-type(2) {
    transition: all 100ms ease-in-out;
    transform-origin: center;
    width: 0;
  }
  .menu-open &:nth-of-type(3) {
    transition: all 100ms ease-in-out;
    transform: rotate(-45deg);
    transform-origin: bottom left;
    width: 36px;
  }
`;

export default MenuIcon;
