import {css, keyframes} from '@emotion/css';
import { mq } from '../../breakpoint';

export const wrapper = css`
    overflow: hidden;
    height: 100vh;
`;

export const pageOne = css`
    background-image: linear-gradient(0deg, #D7D7D7 50%, black 50%);
    height: 100vh;
    transition: transform 1s ease;
    ${mq.lg}{
      background-image: linear-gradient(100deg, #D7D7D7 50%, black 50%);
    }
`

export const pageTwo = css`
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    width: 100%;
    height: 100vh;
    transition: transform 1s ease;
    flex-direction: column;
`

export const slideup = css`
    transform: translateY(-100%);
`

export const slidedown = css`
    transform: translateY(0%);
`


export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const downArrow = css`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100px;
  -moz-animation: ${bounce} 2s infinite;
  -webkit-animation: ${bounce} 2s infinite;
  animation: ${bounce} 2s infinite;
`;

export const upArrow = css`
  position: fixed;
  width: 100px;
  top: 10px;
  -moz-animation: ${bounce} 2s infinite;
  -webkit-animation: ${bounce} 2s infinite;
  animation: ${bounce} 2s infinite;
`;