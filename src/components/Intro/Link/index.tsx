import React from 'react';
import {wrapper} from './style';

interface Props {
    image: string;
    alt: string;
    goto: string;
}

const Link:React.FC<Props> = ({image, alt, goto}) => (
    <div className={wrapper}>
        <a href={goto} target='_blank' rel="noreferrer">
            <img  src={image} alt={alt} />
        </a>
    </div>
);

export default Link;