import React from 'react';
import styles from '../../styles/styles';
import '@fontsource/raleway'

const style = {
    contain: {
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        padding: '1em',
        columnGap: '1.5rem',
        rowGap: '1.5rem'
    },
    card: {
        padding: '1em',
        backgroundColor: '#D8D4D5',
        fontFamily: 'raleway',
        border: '1px solid #cecece',
        borderRadius: '20px'
    },
    links: {
        textDecoration: 'none',
        color: '#739B92',
        margin: '3rem',

    },
    demo: {
        height: '200px',
        width: '270px',
        borderRadius: '20px'
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
                {item.git && <a href={item.git}style={style.links} target="_blank" rel="noopener noreferrer">repo</a>}
            </div>
                ))}
        </div>
    )
}