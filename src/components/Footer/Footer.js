import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className={styles.footerBody}>
            <FontAwesomeIcon style={{ height: 30, width: 30 }} icon={faLinkedinIn}></FontAwesomeIcon>
            <FontAwesomeIcon style={{ height: 30, width: 30, paddingLeft: 15, paddingRight: 15 }} icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon style={{ height: 30, width: 30 }}icon={faGithub}></FontAwesomeIcon>
            <p>matthewbradshaw875@gmail.com</p>
            <p>&copy; 2023 Matthew Bradshaw</p>
        </div>
    )
}

export default Footer;