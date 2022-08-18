import React from 'react';
import burauza from '../../images/burauza.jpg';
import rllrdex from '../../images/rllrdex.png';
import weather from '../../images/weatherdash.jpg';
import '../../styles/styles';



export default function Projects() {
    return (<section id='workbox'>
        <img src={rllrdex} alt='rllrdex' className='main-project'/>
        <img src={burauza} alt='burauza'/>
        <img src={weather} alt='weather'/>

    </section>
    );
}