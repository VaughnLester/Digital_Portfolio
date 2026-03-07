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
            <h1 className="footerChild"><a href="https:www.linkedin.com/in/vaughn-lester/">LinkedIn</a></h1>
        </div>
    );
}
export default Footer;