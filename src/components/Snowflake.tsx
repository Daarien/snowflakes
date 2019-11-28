import React from "react";
import styled from "astroturf";
import sf from "../img/crystal-sf.webp";
import Atom from "../img/atom.png";

// export const d = styled.div`
//   background-color: transparent;
// `;

interface Props {
  size: number;
}

export default function Snowflake({ size }: Props) {
  return (
    <div>
      <img src={Atom} alt="Snowflake" width={size} />
    </div>
  );
}
