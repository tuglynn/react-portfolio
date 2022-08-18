import React from 'react';
import  '../../styles/styles.css';
import resume from '../../assets/docs/resume.pdf';


// const resume = document.querySelector('.resume');
// const handleDownload = (e) => {
//     e.preventDefault();
//     prompt('download resume?');
// }

// resume.addEventListener('click', handleDownload);

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
    {/* <a className="resume" href="../../assets/docs/resume.pdf" download>Resume</a> */}
    </div>
    <div className="resume">
        <h3>Resume</h3>
        <iframe src={resume} width="800" height="800" title="resume"/>
    </div>
</div>
    );
}