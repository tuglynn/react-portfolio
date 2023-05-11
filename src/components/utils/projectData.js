import react from 'react';
import burauza from '../../images/burauza.jpg';
import weather from '../../images/weatherdash.jpg';
import piano from '../../images/pianoquiz.jpg';
import raiseTheBarr from '../../images/raise.png'


const projects = [{
    title: 'Raise The Barr',
    pic: `${raiseTheBarr}`,
    desc: 'A wordpress website',
    deploy: 'https://beverlybarr.com'
},
{
title: 'Burauza No Akachan',
pic: `${burauza}`,
desc: 'A virtual pet app',
deploy: 'https://monacoglynn.github.io/gp-mini-pet/',
git: 'https://github.com/monacoglynn/gp-mini-pet'
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