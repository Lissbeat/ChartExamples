import React from "react";
import styled, { keyframes } from "styled-components";

import { Settings } from "styled-icons/evaicons-solid";

export const HeaderDiv = styled("div")`
  background-color: #141111;
  height: 13%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 25px;
  color: grey;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  animation: ${rotate} 4s linear infinite;
  float: left;
`;

const SettingIcon = styled(Settings)`
  color: orange;
  width: 20%;
  height: 20%;
`;

const Text = styled("h1")`
  padding-right: 20%;
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <Rotate>
        <SettingIcon />
      </Rotate>
      <Text>Some text.. </Text>
    </HeaderDiv>
  );
};
