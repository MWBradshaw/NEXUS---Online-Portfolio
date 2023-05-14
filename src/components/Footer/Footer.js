import styles from "./Footer.module.css";
import { FontAwesomeIcon
 } from "@fortawesome/react-fontawesome";
 import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return(
        <div className={styles.footerBody}>
            <FontAwesomeIcon icon={faLinkedIn} />
            <p>matthewbradshaw875@gmail.com</p>
            <p>&copy; 2023 Matthew Bradshaw</p>
        </div>
    )
}

export default Footer;