import "../components_css/navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
    <nav className="navBar">
        <div className="homeLink"> <h2><Link to="/">HOME</Link></h2> </div>
        <div className="aboutLink"> <h2><Link to="/about">ABOUT</Link></h2> </div>
    </nav>);
}

export default NavBar;