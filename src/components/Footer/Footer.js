import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className={styles.footerBody}>
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            <p>matthewbradshaw875@gmail.com</p>
            <p>&copy; 2023 Matthew Bradshaw</p>
        </div>
    )
}

export default Footer;