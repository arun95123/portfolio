import {css, keyframes} from "@emotion/css";

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

export const content = css`
    display: flex;
    overflow-x: scroll;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

export const about = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const headerBoard = css`
    font-family: "Montserrat-black";
    padding: 2rem;
    border: 2px solid black;
    transform-origin: top center;
    animation: ${swing} 2s infinite;
`;

export const description = css`
    text-align: center;
`
export const divider = css`
    margin: 2rem 0;
`
export const skillsWrapper = css`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    flex-wrap: wrap;
`;

export const contact = css`
    width: 100%;
    font-family: 'Montserrat';
    row-gap: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 2rem;
`;

export const hobbiesWrapper = css`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
    column-gap: 25px;
    row-gap: 25px;
    margin-top: 1.5rem 0;
`;

export const resumeLink = css`
    all: unset;
    margin-top: 1rem;
    color: white;
    background-color: black;
    padding: 1rem;
    border-radius: 26px;
    transition: box-shadow 0.5s;

    a {
        all: unset;
        text-decoration: none;
    }

    &:hover {
        box-shadow: 5px 7px 6px #888888;
    }
`;