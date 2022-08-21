import React, {useState} from 'react';
import About from '../About';
import Intro from '../Intro';
import down from '../../images/down.svg';
import up from '../../images/up.svg';

import {wrapper, pageOne, pageTwo, slideup, slidedown, downArrow, upArrow} from './style';

const Portfolio = () => {
    const [page, setPage] = useState(1);
    return(
        <div className={wrapper}>
            <div className={`${pageOne} ${page === 2 ? slideup : slidedown}`}>
                <Intro />
                <img className={downArrow} onClick={() => setPage(2)} src={down} alt='down arrow'/>
            </div>
            <div className={`${pageTwo} ${page === 2 ? slideup : slidedown}`}>
                <img className={upArrow} onClick={() => setPage(1)} src={up} alt='up arrow'/>
                <About />
            </div>
        </div>
    );
}


export default Portfolio;