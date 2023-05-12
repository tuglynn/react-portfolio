import React from 'react';
import styles from '../../styles/styles';
import hero from '../../images/kingdream.jpg';


export default function Home() {
    return (
        <div className="active animate-in-left"
        style={styles.home}>
            <div
            style={styles.container}>
        <p style={styles.font}>I am a junior web developer with a background in music.
        </p>
        <p style={styles.font}>
            I love everything with knobs and buttons, I.E. synthesizers and computers.
        </p>
        <p style={styles.font}>
        Where I can, bring music to the web, adding a new dimension to the user experience.
        </p>
        </div>
            <img src={hero} alt='hero' className="hero"/>
    </div>
    );
}