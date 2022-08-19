import React from 'react';
import styles from '../../styles/styles';
import '@fontsource/raleway'

const style = {
    contain: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card: {
        margin: '1rem',
        padding: '1em',
        backgroundColor: '#D8D4D5',
        fontFamily: 'raleway'
    },
    links: {
        textDecoration: 'none',
        color: '#739B92',
        margin: '3rem',

    },
    demo: {
        height: '200px',
        width: '270px'
    },
    blip: {
        fontSize: '1em',
        width: '100%',
        textAlign: 'center'
    },
    h2: {
        width: '100%',
        textAlign: 'center',
        fontSize: '2rem',
    }
}

export default function Card(props) {
    return (
        <div style={style.contain}>
                {props.projects.map(item => (
            <div style={style.card} key={item.id}>
                <h2 style={style.h2}>{item.title}</h2>
                <img src={item.pic} alt={item.title} style={style.demo}/>
                <p style={style.blip}>{item.desc}</p>
                <a href={item.deploy}
                style={style.links}
                target="_blank"
                rel="noopener noreferrer">deployed</a>
                 <a href={item.git}
                style={style.links}
                target="_blank"
                rel="noopener noreferrer">repo</a>
            </div>
                ))}
        </div>
    )
}