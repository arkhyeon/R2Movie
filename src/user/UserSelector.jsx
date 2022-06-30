import React from "react";
import styled from "@emotion/styled";

function UserSelector() {
  console.log("hi");

  return (
    <>
      <UserWrap>
        <SignText>Who's watching?</SignText>
        <Users>
          <User></User>
          <User></User>
          <User></User>
          <User></User>
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

const User = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #676aa0;
  margin: 0 15px;
`;

export default UserSelector;
