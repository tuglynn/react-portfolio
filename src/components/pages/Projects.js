import React from 'react';
import '../../styles/styles';
// import styles from '../../styles/styles';
import Card from './Card';
import projectData from '../utils/projectData';



export default function Projects() {


    return (<section id='workbox'>
        {/* <img src={rllrdex} alt='rllrdex' className='main-project' style={styles.p1}/>
        <img src={burauza} alt='burauza'/>
        <img src={weather} alt='weather'/> */}
        <Card projects={projectData}/>

    </section>
    );
}