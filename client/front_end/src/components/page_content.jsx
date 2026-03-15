import "../components_css/page_content.css"
import { useState } from "react";
import { useEffect } from "react";



function Page_content(){

    const [projects, getData] = useState([]); //needed for react, cannot use document.get... this stores those variable and useEffect sets the values (React syntax)

    useEffect(() => {
    fetch("/projectAPI")
        .then(res => res.json())
        .then(result => getData(result));
    }, []);


    return(
        <div className="pageContent">
            <div className="project1">
                <h1>Project 1:</h1>
                <a href={projects[0] && projects[0].link}> <h1>{projects[0].title}</h1> </a>
            </div>
        </div>
    );


    
}

export default Page_content;