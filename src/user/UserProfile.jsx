import React from "react";
import styled from "@emotion/styled";

function UserProfile(props) {
  console.log(props);
  return <User>id : {props.id}</User>;
}
const User = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #676aa0;
  margin: 0 15px;
`;

export default UserProfile;
