import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

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
        <div className="social-box">
<FontAwesomeIcon
icon={faLinkedin}
className="hover"
size='6x'
onClick={linkedIn}/>
<FontAwesomeIcon
icon={faGithub}
size='6x'
className="hover"
onClick={github}/>
        </div>

        <h3 className="footer-text">PMTG 2022</h3>
    </footer>
)
}

export default Footer;