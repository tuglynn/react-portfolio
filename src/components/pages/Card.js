import React from 'react';

export default function Card(props) {
    return (
        <div className="contain">
                {props.projects.map(item => (
            <div className="project-card" key={item.id}>
                <h2 className="pro-title">{item.title}</h2>
                <img src={item.pic} alt={item.title}/>
                <p className="excerpt">{item.desc}</p>
                <a href={item.deploy}
                target="_blank"
                rel="noopener noreferrer">deployed</a>
                {item.git && <a href={item.git} target="_blank" rel="noopener noreferrer">repo</a>}
            </div>
                ))}
        </div>
    )
}