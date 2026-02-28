import "../components_css/navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
    <nav className="navBar">
        <Link to="/">HOME</Link>
        <Link to="/about">Link to About Page!</Link>
    </nav>);
}

export default NavBar;