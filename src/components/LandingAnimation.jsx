import React from "react";
import styled, { keyframes } from "styled-components";

const LandingAnimation = () => {
  const up = keyframes`
                100% {
                    transform: translateX(470px);
                }
            `;
  const Ball = styled.g`
    animation: ${up} 4s linear alternate infinite;
  `;
  return (
    <div
      style={{
        display: `flex`,
        width: `80 % `,
        margin: `auto`,
        justifyContent: `center`
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        width="500px"
        height="200px"
      >
        <line x1="0" y1="0" x2="0" y2="60" stroke="black" />
        <g strokeWidth="0">
          <g>
            <Ball>
              <circle cx="15" cy="30" r="15" />
            </Ball>
          </g>
        </g>
        <line x1="500" y1="0" x2="500" y2="60" stroke="black" />
      </svg>
    </div>
  );
};

export default LandingAnimation;
