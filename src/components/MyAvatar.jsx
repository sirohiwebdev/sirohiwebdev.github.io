import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

export const MyAvatar = styled(animated.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: #f9f9f9;
  background-image: url(${props => props.source});
  background-position: top center;
  border: 8px solid #f1c40f;
  box-shadow: 20px 20px 100px -40px rgba(10, 10, 10, 0.3);
`;
