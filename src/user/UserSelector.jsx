import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import UserProfile from "./UserProfile";

function UserSelector() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:3100/users").then((res) => {
      console.log(res);
      setUsers(res);
    });
  };

  return (
    <>
      <UserWrap>
        <SignText>Who's watching?</SignText>
        <Users>
          {users.map((user) => {
            <UserProfile key={user.id} user={user} />;
          })}
        </Users>
      </UserWrap>
    </>
  );
}

const UserWrap = styled.div`
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
