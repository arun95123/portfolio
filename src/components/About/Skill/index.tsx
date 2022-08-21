import React from 'react';
import { skill, skillLogo, skillName } from './style';

interface Props {
    logo: string;
    header: string;
}
const Skill:React.FC<Props> = ({logo, header}) => (
    <div className={skill}>
        <img alt='logo' className={skillLogo} src={logo}/>
        <div className={skillName}>{header}</div>
    </div>
);

export default Skill;