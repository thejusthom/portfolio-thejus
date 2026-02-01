import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "+ Backend",
          "+ Frontend",
          "+ Database",
          "+ Cloud",
          "+ DevOps"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: '|'
      }}a
    />
  );
}
export default Type;