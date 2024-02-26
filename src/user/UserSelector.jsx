import React from "react";
import styled from "@emotion/styled";
import UserProfile from "./UserProfile";
import { MdAddCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/user";

function UserSelector() {
  const users = useSelector(userSelector);

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
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Users = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const SignText = styled.div`
  font-size: 52px;
  font-weight: bolder;
  color: #ebebeb;
  text-align: center;
`;

export default UserSelector;
