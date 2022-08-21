import React from 'react';
import { hobby, hobbyGif, hobbyName } from './style';

interface Props {
    logo: string;
    alt: string;
    header: string;
}
const Hobby:React.FC<Props> = ({logo, alt, header}) => (
    <div className={hobby}>
        <img alt={alt} className={hobbyGif} src={logo}/>
        <div className={hobbyName}>{header}</div>
    </div>
);

export default Hobby;