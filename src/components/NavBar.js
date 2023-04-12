import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to="">Resume</Link>
            <Link to={{ pathname: "https://github.com/MWBradshaw"}}>Github</Link>
        </div>
    );
}

export default NavBar;