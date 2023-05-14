import React from 'react';
import Card from './Card';
import projectData from '../utils/projectData';

export default function Projects() {
    return (<section id='workbox'>
        <Card projects={projectData}/>
    </section>
    );
}