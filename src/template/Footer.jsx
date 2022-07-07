import React from "react";
import styled from "@emotion/styled";

function Footer() {
  return (
    <FooterWrap>
      MIT Licensed | Copyright © 2019-present Evan You & Vite Contributors
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  width: 100%;
  height: 34px;
  border-top: 1px solid #ebebeb;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #ebebeb;
`;

export default Footer;
