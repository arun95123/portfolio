import { css, keyframes } from '@emotion/css';

export const typeText = css`
  display: flex;
  font-weight: bold;
`;

export const blink = keyframes`
  0% { opacity: 0;}
  50% { opacity: 0.5;}
  110% { opacity: 1;}
`;

export const cursor = css`
  background-color: grey;
  width: 20px;
  color: transparent;
`;

export const cursorBlink = css `
  -moz-animation: ${blink} 0.5s infinite;
  -webkit-animation: ${blink} 0.5s infinite;
  animation: ${blink} 0.5s infinity;
`;

export const cursorBlinkStop = css `
  -moz-animation: none;
  -webkit-animation: none;
  animation: none;
`;
