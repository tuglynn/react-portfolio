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
        
        </p>
        <p style={styles.font}>
            I love anything with knobs and buttons, I.E. synthesizers and computers, so coding is my new home. I
            hope
            to merge both coding and music to continue both my loves.
        </p>
            <img src={hero} alt='hero' style={styles.hero}/>
    </div>
    );
}