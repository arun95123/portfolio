import {css ,keyframes} from '@emotion/css';
export const spin = keyframes`
    0%{
    filter: grayscale();
    transform: rotateY(0deg);
    }
    50%{
    filter: grayscale();
    transform: rotateY(90deg);
    }
    100%{
    filter: none;
    transform: rotateY(0deg);
    }
`

export const wrapper = css`
    img{
    width: 32px;
    filter: grayscale();
    }
    &:hover {
    img{
        filter: none;
        animation: ${spin} 1s;
    }
}
`