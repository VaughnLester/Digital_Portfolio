import "../components_css/footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="flex flex-wrap items-center justify-center gap-10 border-2 border-black p-6 bg-gray-100">
        
        <div className="border px-4 py-2 rounded">
            <h2 className="font-semibold">
            <Link to="/">HOME</Link>
            </h2>
        </div>

        <div className="border px-4 py-2 rounded">
            <h2 className="font-semibold">
            <Link to="/about">ABOUT</Link>
            </h2>
        </div>

        <h1 className="border px-4 py-2 rounded font-bold">
            Vaughn Lester
        </h1>

        <h1 className="border px-4 py-2 rounded">
            vaughnl2342@gmail.com
        </h1>

        <h1 className="border px-4 py-2 rounded">
            774-826-9906
        </h1>

        <h1 className="border px-4 py-2 rounded">
            <a href="https://www.linkedin.com/in/vaughn-lester/" target="_blank" className="text-blue-600 underline">
            LinkedIn
            </a>
        </h1>

        </div>
    );
}
export default Footer;