import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import UserProfile from "./UserProfile";
import { MdAddCircle } from "react-icons/all";
import { removeCookie } from "../lib/cookie";
import { userFetch } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

function UserSelector() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("remove");
  removeCookie("R2USER");
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:3100/users").then((res) => {
      dispatch(userFetch(res.data));
    });
  };

  const addUserBtn = () => {
    if (users.length < 4) {
      return <MdAddCircle size="210" color="gray" cursor="pointer" />;
    }
  };

  return (
    <>
      <UsersWrap>
        <SignText>Who's watching?</SignText>
        <Users>
          {users.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
          {addUserBtn()}
        </Users>
      </UsersWrap>
    </>
  );
}

const UsersWrap = styled.div`
  width: 100%;
  height: calc(100vh - 177px);
`;

const Users = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const SignText = styled.div`
  color: #ebebeb;
  text-align: center;
`;

export default UserSelector;
