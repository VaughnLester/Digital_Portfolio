import "../components_css/navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
    <nav className="flex justify-between items-center p-4 bg-white shadow">
        <div className="space-x-4">
        <a className="hover:text-indigo-600"><Link to="/">Home</Link></a>
        <a className="hover:text-indigo-600"><Link to="/about">About</Link></a>
  </div>
    </nav>);
}

export default NavBar;