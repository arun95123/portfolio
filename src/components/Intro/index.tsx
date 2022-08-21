import React, {memo} from 'react';
import Typer from './Typer';
import { InstructionKey } from '../../types';
import {wrapper, image, displayInfo, role, linkContainer} from './style';
import venky from '../../images/venkatachalam.png';
import lin from '../../images/lin.svg';
import github from '../../images/githuub.svg';
import email from '../../images/gmail.svg';

import Link from './Link';

const Intro = () => (
    <div className={wrapper}>
        <div className={displayInfo}>
            <Typer instruction={[
                {[InstructionKey.TYPE]: 'Hi, I am Venkatachalam'},
                {[InstructionKey.DELAY]: '1000'},
                {[InstructionKey.BACKSPACE]: '12'},
                {[InstructionKey.TYPE]: 'enky'},
                {[InstructionKey.DELAY]: '1000'},
                {[InstructionKey.BACKSPACE]: '4'},
                {[InstructionKey.TYPE]: 'enkatachalam'},
                {[InstructionKey.DELAY]: '1000'},
            ]}/>
            <div className={role}>Front End Developer</div>
            <div className={linkContainer}>
                <Link image={lin} alt='linkdin' goto={"https://www.linkedin.com/in/venkatachalam-meyyappan"}/>
                <Link image={github} alt='github' goto={"https://github.com/arun95123"}/>
                <Link image={email} alt='mail' goto={"mailto:venkatmey@gmail.com"}/>
            </div>

        </div>
        <img className={image} src={venky} alt='profile'/>
    </div>
);

export default memo(Intro);