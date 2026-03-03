import "../components_css/page_content.css"
import { useState } from "react";
import { useEffect } from "react";



function Page_content(){

    const [projects, getData] = useState([]); //needed for react, cannot use document.get... this stores those variable and useEffect sets the values (React syntax)

    useEffect(() => {
    fetch("http://localhost:3000/projectAPI")
        .then(res => res.json())
        .then(result => getData(result));
    }, []);


    return(
        <div className="pageContent">
            <div className="project1">
                <h1>Project 1:</h1>
                <a href={projects[0] && projects[0].link}> <h1>Vaughn Lester: D2G Digital Documentation Dump</h1> </a>
            </div>
            <div className="project2">
                <h1>This is project 2</h1>
            </div>
        </div>
    );


    
}

export default Page_content;