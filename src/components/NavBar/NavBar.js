import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={styles.navBody}>
            <div>
                <Link to="/" className={styles.navBrand}>NEXUS</Link>
            </div>

            <div>
                <Link className={styles.navItem} to="projects">Projects</Link>
                <Link className={styles.navItem} to="workexperience">Work Experience</Link>
                <Link className={styles.navItem} to="about">About Me</Link>
                <Link className={styles.navItem} to="src/assets/Matthew Bradshaw - Resume (School).pdf" target="_blank" download>Resume</Link>
                <a className={styles.navItem} href="https://github.com/MWBradshaw" target="_blank" rel="noreferrer">Github</a>
                <Link className={styles.navItem} to="contact">Contact</Link>
            </div>
        </div>
    );
}

export default NavBar;