import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="">Home</Link>
            <Link to="">Projects</Link>
            <Link to="">Work Experience</Link>
            <Link to="">About Me</Link>
            <Link to="">Resume</Link>
            <Link to={{ pathname: "https://github.com/MWBradshaw"}}>Github</Link>
        </div>
    );
}

export default NavBar;