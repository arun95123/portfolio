import React from 'react';
import { content, board, rightString, leftString, stringContainer, pin } from './style';

interface Props {
    text: string;
}
const Board:React.FC<Props> = ({text}) => (
    <div className={board}>
        <div className={stringContainer}>
            <div className={pin}></div>
            <div className={leftString}></div>
            <div className={rightString}></div>
        </div>
        <div className={content}>{text}</div>
    </div>
);

export default Board;