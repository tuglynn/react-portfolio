import react from 'react';
import burauza from '../../images/burauza.jpg';
import weather from '../../images/weatherdash.jpg';
import piano from '../../images/pianoquiz.jpg';
import raiseTheBarr from '../../images/raise.png'


const projects = [{
    id: 43234123461,
    title: 'Raise The Barr',
    pic: `${raiseTheBarr}`,
    desc: 'A wordpress website',
    deploy: 'https://beverlybarr.com'
},
{
    id: 55555559873562,
    title: 'Burauza No Akachan',
    pic: `${burauza}`,
    desc: 'A virtual pet app',
    deploy: 'https://monacoglynn.github.io/gp-mini-pet/',
    git: 'https://github.com/monacoglynn/gp-mini-pet'
},
{
    id: 33451234677,
    title: 'Weather Dashboard',
    pic: `${weather}`,
    desc: 'A weather app that shows 5 day forecast',
    deploy: 'https://monacoglynn.github.io/weather-tracker/',
    git: 'https://github.com/monacoglynn/weather-tracker'
},
{
    id: 45432345,
    title: 'Piano Quiz',
    pic: `${piano}`,
    desc: 'A piano theme multiple choice quiz game',
    deploy: 'https://monacoglynn.github.io/piano-quiz/index.html',
    git: 'https://github.com/monacoglynn/piano-quiz'
}]


export default projects;