import "../components_css/footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <div className="footerChild"> <h2><Link to="/">HOME</Link></h2> </div>
            <div className="footerChild"> <h2><Link to="/about">ABOUT</Link></h2> </div>
            <h1 className="footerChild">Vaughn Lester</h1>
            <h1 className="footerChild">vaughnl2342@gmail.com</h1>
            <h1 className="footerChild">774-826-9906</h1>
            <text className="footerChild">LinkedIn</text>
        </div>
    );
}
export default Footer;