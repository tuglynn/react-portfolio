// import ReactDOM from 'react-dom';
import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/styles';






function Footer() {
    const linkedIn = (e) => {
        e.preventDefault();
        window.open(
            'http://www.linkedin.com/in/patrick-tu-glynn',
            '_blank');
    };
    const github = (e) => {
        e.preventDefault();
        window.open(
            'https://github.com/monacoglynn',
            '_blank');
    };
return (
    <footer>
        <div style={styles.icons}>
<FontAwesomeIcon
icon={faLinkedin}
style={styles.hover}
size='6x'
onClick={linkedIn}/>
<FontAwesomeIcon
icon={faGithub}
size='6x'
style={styles.hover}
onClick={github}/>
        </div>

        <h3 style={styles.h3}>PMTG 2022</h3>
    </footer>
)
}

export default Footer;