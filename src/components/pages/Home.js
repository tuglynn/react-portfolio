import React from 'react';
import styles from '../../styles/styles'
import hero from '../../images/kingdream.jpg'



export default function Home() {
    return (
        <div 
        style={styles.container}>
            <img src={hero} alt='hero' style={styles.hero}/>
        <p style={styles.font}>I am a piano teacher and husky wrangler. I live in San Diego California with my
            wife, Cecee, our four dogs, and a tortoise named Frank.
        </p>
        <p style={styles.font}>
            I have been in professional touring bands from 2011 to 2021. Once the lockdown happened I realized I
            couldn't continue living the life of a touring musician constantly on the move. I longed for a life with
            more roots.
        </p>
        <p style={styles.font}>
            I love anything with knobs and buttons, I.E. synthesizers and computers, so coding is my new home. I
            hope
            to merge both coding and music to continue both my loves.
        </p>

    </div>
    );
}