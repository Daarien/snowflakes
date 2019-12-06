import React from "react";
import styled, { keyframes } from "styled-components";
import snowflake from "./img/sf.png";

const TreeContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap-reverse;
  width: ${({ size }) => Math.floor(size.width)}px;
  align-self: flex-end;
`;
const TreeElement = styled.img`
  width: 30px;
  align-self: baseline;
`;

export default function Tree({ count, size }) {
  let flakes = [];
  if (count) {
    flakes = [...Array(count).keys()];
  }
  const width = size.width / 14;

  return (
    <TreeContainer size={{ width }}>
      {Boolean(flakes.length) &&
        flakes.map(i => {
          return <TreeElement key={i} src={snowflake} alt="snowflake" />;
        })}
    </TreeContainer>
  );
}
