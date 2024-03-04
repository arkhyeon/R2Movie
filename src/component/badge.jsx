import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function Badge({ children, bgColor, color }) {
  return (
    <BadgeWrap className="badge" bgColor={bgColor} color={color}>
      {children}
    </BadgeWrap>
  );
}

const BadgeWrap = styled.div`
  border-radius: 6px;
  padding: 3px 6px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  ${({ bgColor, color }) =>
    css`
      background-color: ${bgColor ? bgColor : "#676aa8"};
      color: ${color ? color : "#ebebeb"};
    `};
`;

export default Badge;
