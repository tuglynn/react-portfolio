import React from 'react';
import styles from '../../styles/styles';
import hero from '../../images/kingdream.jpg';



export default function Home() {
    return (
        <div 
        style={styles.container}>
        <p style={styles.font}>I am a junior web developer with a background in music.
        </p>
        <p style={styles.font}>
            I love anything with knobs and buttons, I.E. synthesizers and computers.
        </p>
        <p style={styles.font}>
        Where I can, bring music to the web, adding a new dimension to the user experience.
        </p>
            <img src={hero} alt='hero' style={styles.hero}/>
    </div>
    );
}