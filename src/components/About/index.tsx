import React from 'react';
import { description, content, divider, skillsWrapper, contact, about, hobbiesWrapper, resumeLink } from './style';
import seperator from '../../images/separatorBlack 1.png';
import html5 from '../../images/HTML5_Badge.svg';
import css3 from '../../images/css3.svg';
import docker from '../../images/docker.svg'; 
import emotion from '../../images/emotion.png';
import gatsby from '../../images/gatsby.svg';
import git from '../../images/git.png';
import javascript from '../../images/javascript.svg'; 
import node from '../../images/nodejs.svg';
import reactLogo from '../../images/react.svg';
import sass from '../../images/sass.svg';
import typescript from '../../images/typescript.svg';
import webpack from '../../images/webpack.svg';
import lin from '../../images/lin.svg';
import github from '../../images/githuub.svg';
import email from '../../images/gmail.svg';
import animeGif from '../../images/anime.gif';
import gamingGif from '../../images/gaming.gif';
import footballGif from '../../images/football.gif';

import Skill from './Skill';
import { contentGrid } from '../..';
import Board from './Board';
import Link from '../Intro/Link';
import { linkContainer } from '../Intro/style';
import Hobby from './Hobby';

const skills = [
    {
        logo: html5,
        header: 'HTML5'
    },
    {
        logo: javascript,
        header: 'JAVASCRIPT'
    },
    {
        logo: typescript,
        header: 'TYPESCRIPT'
    },
    {
        logo: css3,
        header: 'CSS3'
    },
    {
        logo: emotion,
        header: 'EMOTION'
    },
    {
        logo: sass,
        header: 'SASS'
    },
    {
        logo: reactLogo,
        header: 'REACT'
    },
    {
        logo: gatsby,
        header: 'GATSBY'
    },
    {
        logo: node,
        header: 'NODE JS'
    },
    {
        logo: webpack,
        header: 'WEBPACK'
    },
    {
        logo: docker,
        header: 'DOCKER'
    },
    {
        logo: git,
        header: 'GIT'
    },
]

const About = () => (
    <div className={content}>
        <div className={`${about} ${contentGrid}`}>
            <Board text='ABOUT ME'/>
            <div className={description}>
                <p>
                    A passionate web developer working with Javascript and its frameworks for the past 5 years.
                    Most of my experience is asscoicated with building websites in React.
                </p>
                <p>
                    An enthusiastic learner currently exploring the various aspects of Full Stack Web Technologies.
                    Eager to understand how things work and always happy to understand the complete picture of any application.
                </p>
                <button className={resumeLink}>
                    <a href={"Venkatachalam_Meyyappan_Resume.pdf"} target="_blank" rel="noreferrer">Get My Resume</a>
                </button>
            </div>
            <img className={divider} src={seperator} alt='seperator'/>
            <Board text='SKILLS'/>
            <div className={skillsWrapper}>
                {
                    skills.map((item) => (
                        <Skill logo={item.logo} header={item.header} />
                    ))
                }
            </div>
            <img className={divider} src={seperator} alt='seperator'/>
            <Board text='HOBBIES'/>
            <div className={hobbiesWrapper}>
                <Hobby logo={animeGif} header='Watching Anime' alt='anime' />
                <Hobby logo={gamingGif} header='Gaming' alt='gaming' />
                <Hobby logo={footballGif} header='Football' alt='football' />
            </div>
            <img className={divider} src={seperator} alt='seperator'/>
        </div>
        <div className={contact}>
            <div>GET IN TOUCH</div>
            <div className={linkContainer}>
                <Link image={lin} alt='linkdin' goto={"https://www.linkedin.com/in/venkatachalam-meyyappan"}/>
                <Link image={github} alt='github' goto={"https://github.com/arun95123"}/>
                <Link image={email} alt='mail' goto={"mailto:venkatmey@gmail.com"}/>
            </div>
        </div>
    </div>

);


export default About;