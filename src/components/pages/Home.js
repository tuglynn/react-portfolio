import React from 'react';
import hero from '../../images/github.jpeg';

export default function Home() {
    return (
        <div className="home-div">
            <div className="container">
        <p>I am a junior web developer with a background in music.
        </p>
        <p>
            I love everything with knobs and buttons, I.E. synthesizers and computers.
        </p>
        <p>
        Where I can, bring music to the web, adding a new dimension to the user experience.
        </p>
        </div>
            <img src={hero} alt='hero' className="hero"/>
    </div>
    );
}