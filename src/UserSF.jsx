import React, { memo, useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import snowflake from "./img/snow-flake.png";

const animateSF = keyframes`
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
`;

const whirl = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  20% {
    transform: rotateY(0);
  }
  70% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fallingSfContainer = keyframes`
  0% {
    opacity: 0.8;
    transform: translateY(-100px);
  }
  25% {
    opacity: 1;
    transform: translateY(150px);
  }
  50% {
    opacity: 1;
    transform: translateY(400px);
  }
  75% {
    opacity: 1;
    transform: translateY(650px);
  }
  100% {
    opacity: 0;
    transform: translateY(900px);
}
`;

const SnowFlake = styled.img`
  /* animation: ${whirl} 7s ease-in; */
  position: absolute;
`;

const SFContainer = styled.div`
  z-index: 999;
  perspective: 1000px;
  width: 280px;
  height: 320px;
  margin: 0 auto;
  animation: ${fallingSfContainer} 7s linear;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  z-index: 999;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  div {
    padding: 5px;
  }
`;

export default memo(function UserSF({ user }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (user.userFullName) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 7000);
    }
  }, [user]);
  const w = user.userFullName.split(" ");

  return visible ? (
    <SFContainer>
      <UserName>
        <div>{w[0]}</div>
        <div>{w[1]}</div>
        <div>{w[2]}</div>
      </UserName>
      <SnowFlake src={snowflake} />
    </SFContainer>
  ) : null;
});
