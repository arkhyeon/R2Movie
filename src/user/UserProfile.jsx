import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connection } from "../redux/login";

function UserProfile({ user }) {
  const dispatch = useDispatch();

  const accessUser = () => {
    dispatch(connection(user));
  };

  return (
    <NavLink to="/trend" onClick={accessUser}>
      <UserWrap>
        <User user={user} />
        <UserName>{user.name}</UserName>
      </UserWrap>
    </NavLink>
  );
}

const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;

const User = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-image: url(${({ user }) => user.profileImg});
  background-repeat: round;
  background-size: cover;
  margin: 0 15px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

const UserName = styled.p`
  color: #ebebeb;
  font-size: 18px;
`;

export default UserProfile;
