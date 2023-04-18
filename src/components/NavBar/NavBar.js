import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="projects">Projects</Link>
            <Link to="workexperience">Work Experience</Link>
            <Link to="about">About Me</Link>
            <Link to="src/assets/Matthew Bradshaw - Resume (School).pdf" target="_blank" download>Resume</Link>
            <Link to={{ pathname:"https://github.com/MWBradshaw"}} target="_blank">Github</Link>
        </div>
    );
}

export default NavBar;