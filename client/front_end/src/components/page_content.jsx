import "../components_css/page_content.css"
import { useState } from "react";
import { useEffect } from "react";



function page_content(){

    const [projects, getData] = useState([]); //needed for react, cannot use document.get... this stores those variable and useEffect sets the values (React syntax)

    useEffect(() => {
    fetch("http://localhost:3000/projectAPI")
        .then(res => res.json())
        .then(result => getData(result));
    }, []);


    return(
        <div className="pageContent">
        <h1>MAIN PAGE CONTENT</h1>
        <h1>Vaughn Lester: Digital Portfolio</h1><br></br>
        <a href={projects[0] && projects[0].link}>D2G Digital Documentation Dump</a>
        </div>
    );
}

export default page_content;