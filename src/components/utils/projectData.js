import react from 'react';
import burauza from '../../images/burauza.jpg';
import rllrdex from '../../images/rllrdex.png';
import weather from '../../images/weatherdash.jpg';
import jate from '../../images/jate.png';
import piano from '../../images/pianoquiz.jpg';
import expressNotes from '../../images/express-note-taker.png';


const projects = [{
    title: 'Rllrdex',
    pic: `${rllrdex}`,
    desc: 'Pokemon Themed social media app',
    deploy: 'https://project2-rllr.herokuapp.com/',
    git: 'https://github.com/monacoglynn/Project-2---Rllr'
},
{
    title: 'Jate',
    pic: `${jate}`,
    desc: 'A PWA text editor',
    deploy: 'https://calm-oasis-31944.herokuapp.com/',
    git: 'https://github.com/monacoglynn/pwa-text-editor'
},
{
title: 'Burauza No Akachan',
pic: `${burauza}`,
desc: 'A virtual pet app',
deploy: 'https://monacoglynn.github.io/gp-mini-pet/',
git: 'https://github.com/monacoglynn/gp-mini-pet'
},
{
    title: 'Express Note Taker',
    pic: `${expressNotes}`,
    desc: 'An express powered note taker app',
    deploy: 'https://afternoon-castle-95204.herokuapp.com/',
    git: 'https://github.com/monacoglynn/express-note-taker'
},
{
title: 'Weather Dashboard',
pic: `${weather}`,
desc: 'A weather app that shows 5 day forecast',
deploy: 'https://monacoglynn.github.io/weather-tracker/',
git: 'https://github.com/monacoglynn/weather-tracker'
},
{
    title: 'Piano Quiz',
    pic: `${piano}`,
    desc: 'A piano theme multiple choice quiz game',
    deploy: 'https://monacoglynn.github.io/piano-quiz/index.html',
    git: 'https://github.com/monacoglynn/piano-quiz'
}]


export default projects;