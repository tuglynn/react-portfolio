import React from 'react';
import  '../../styles/styles.css';
import resume from '../../assets/docs/resume.pdf';


export default function Contact() {
    return (
<div >
    <div className="address">
        <h2>
        Contact Me
    </h2>
    <a href="https://github.com/monacoglynn" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="mailto:pmtgcode@gmail.com?" subject="Questions about code">Email</a>
    <a href="http://www.linkedin.com/in/patrick-tu-glynn
    " target="_blank" rel="noopener noreferrer">Linked-In</a>
    </div>
    <div className="resume">
        <h3>Resume</h3>
        <iframe src={resume} width="800" height="800" title="resume"/>
    </div>
</div>
    );
}