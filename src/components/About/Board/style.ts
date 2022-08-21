import { css, keyframes } from "@emotion/css";

export const swing = keyframes`
    0%, 100% {
        transform: rotate(10deg);
    }
    25%, 75% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-10deg);
    }
`

export const leftStringSwing = keyframes`
    0%, 100% {
        transform: rotate(310deg);
    }
    25%, 75% {
        transform: rotate(300deg);
    }
    50% {
        transform: rotate(290deg);
    }
`
export const rightStringSwing = keyframes`
    0%, 100% {
        transform: rotate(70deg);
    }
    25%, 75% {
        transform: rotate(60deg);
    }
    50% {
        transform: rotate(50deg);
    }
`

export const board = css`

`;

export const stringContainer = css`
    margin: 1.75rem;
    display: flex;
    position: relative;
    justify-content: center;
`;

export const leftString = css`
    width: 35px;
    transform-origin: right;
    transform: rotate(300deg);
    border-bottoM: 2px solid black;
    animation: ${leftStringSwing} 2s infinite;
`;

export const rightString = css`
    width: 35px;
    border-bottoM: 2px solid black;
    transform-origin: left;
    transform: rotate(60deg);
    animation: ${rightStringSwing} 2s infinite;
`;

export const content = css`
    font-family: "Montserrat-black";
    padding: 1rem 2rem;
    border: 6px solid black;
    transform-origin: top center;
    animation: ${swing} 2s infinite;
`;

export const pin = css`
    width: 20px;
    height: 20px;
    background-color: grey;
    position: absolute;
    border-radius: 10px;
    z-index: 1;
`