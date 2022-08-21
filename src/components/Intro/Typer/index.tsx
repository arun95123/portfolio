import React, {useState, useEffect, useRef, memo} from 'react';
import {InstructionKey} from '../../../types';
import { typeText, cursor, cursorBlink, cursorBlinkStop } from './style';

interface Props {
    instruction: {[key in InstructionKey]?: string}[];
}

const Typer:React.FC<Props> = ({instruction}) => {
    const [text, setText] = useState("");
    const [step, setStep] = useState(0);
    const [targetLength, setTargetLength] = useState(0);
    const [blink, setBlink] = useState(true);

    let timerId: { current: NodeJS.Timeout | null } =useRef(null);

    useEffect(() => {
        if(instruction[step]){
            let command = Object.keys(instruction[step])[0];
            let value = instruction[step][command as InstructionKey]
            if(command === InstructionKey.TYPE && value){
                setBlink(false);
                type(value);
            }else if(command === InstructionKey.BACKSPACE && value){
                setBlink(false);
                del(value);
            }else if(command === InstructionKey.DELAY && value ){
                setBlink(true);
                setTimeout(() => setStep(prev => prev + 1), parseInt(value));
            }
        }else {
            setTimeout(() => {
                setText("");
                setTargetLength(0);
                setStep(0);
            }, 3000);
        }
    }, [step, instruction]);

    useEffect(() => {
        if(targetLength > 0 && text.length === targetLength){
            clearInterval(timerId.current as NodeJS.Timeout);
            setStep(prev => prev +1);
        }
    }, [text, targetLength]);

    const type = (value: string) => {
        let index = 0;
        let l = value.length
        setTargetLength(prev => prev + l);
        timerId.current = setInterval(() => {
            setText(prev => {
                return prev + value?.[index++];
            });
        }, 100);
    }

    const del = (value: string) => {
        let l = parseInt(value);
        setTargetLength(prev => prev - l);
        timerId.current = setInterval(() => {
            setText(prev => {
                return prev.slice(0, prev.length - 1);
            });
        }, 100);
    }

    return(
        <div className={typeText}>
            <div>{text}</div>
            <div className={`${cursor} ${blink ? cursorBlink: cursorBlinkStop}`}>C</div>
        </div>
    )
};

export default memo(Typer);