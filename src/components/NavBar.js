import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components/native'
import Link from 'react-router-dom';

const NavLink = styled.Link({
    textDecoration: 'none'
});

const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/workexperience">Work Experience</NavLink>
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/assets/Matthew Bradshaw - Resume (School).pdf" download>Resume</NavLink>
            <NavLink to={{ pathname: "https://github.com/MWBradshaw"}}>Github</NavLink>
        </div>
    );
}

export default NavBar;