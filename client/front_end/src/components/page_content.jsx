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
        <div className="bg-gray-300 grid grid-cols-3 gap-8 p-[5%] min-h-[80vh] auto-rows-min">
            <div className="bg-white p-5 rounded-xl shadow transition hover:-translate-y-1 hover:shadow-lg text-center">
                <h1 className="font-bold lg">Project 1:</h1>
                <a href={projects[0]?.link}> <h1 className="font-bold lg">{projects[0]?.title}</h1> </a>
            </div>
        </div>
    );


    
}

export default Page_content;