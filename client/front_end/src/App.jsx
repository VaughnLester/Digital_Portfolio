import { useState } from "react";
import { useEffect } from "react";

const App = () => {

    const [text, getData] = useState(null); //needed for react, cannot use document.get... this stores those variable and useEffect sets the values (React syntax)

    useEffect(() => {
    fetch("http://localhost:3000/testpage")
        .then(res => res.text())
        .then(result => getData(result));
    }, []);

    console.log(text);

  return (
    //javascript goes here, above the html 
    <>
    <div>App</div>
    <h1>is this working? lol</h1>
    <a href="http://localhost:3000/">Click Here for Express Backend!</a>
    <h1 id='test'>{text}</h1>
    </>
  )
}

export default App
