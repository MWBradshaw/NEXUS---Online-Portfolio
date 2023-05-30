import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div className={styles.footerBody}>
            <a className={styles.footerIcon} href="https://www.linkedin.com/in/matthew-bradshaw-2742271ab/" target="_blank" rel="noreferrer" ><FontAwesomeIcon style={{ height: 30, width: 30 }} icon={faLinkedinIn}></FontAwesomeIcon></a>
            <a className={styles.footerIcon} href="https://www.instagram.com/101robbs/" target="_blank" rel="noreferrer" ><FontAwesomeIcon style={{ height: 30, width: 30, paddingLeft: 15, paddingRight: 15 }} icon={faInstagram}></FontAwesomeIcon></a>
            <a className={styles.footerIcon} href="https://github.com/MWBradshaw" target="_blank" rel="noreferrer" ><FontAwesomeIcon style={{ height: 30, width: 30 }}icon={faGithub}></FontAwesomeIcon></a>
            <p>matthewbradshaw875@gmail.com</p>
            <p>&copy; 2023 Matthew Bradshaw</p>
        </div>
    )
}

export default Footer;