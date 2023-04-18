import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className={styles.navbody}>
            <div>
                <h2><Link to="/">NEXUS</Link></h2>
            </div>
            <div>
                <Link to="projects">Projects</Link>
                <Link to="workexperience">Work Experience</Link>
                <Link to="about">About Me</Link>
                <Link to="src/assets/Matthew Bradshaw - Resume (School).pdf" target="_blank" download>Resume</Link>
                <Link to={{ pathname:"https://github.com/MWBradshaw"}} target="_blank">Github</Link>
            </div>
        </div>
    );
}

export default NavBar;