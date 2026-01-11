import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    let x = [{"id":1,"link":"google.com"}];
    const [text, getData] = useState([]); //needed for react, cannot use document.get... this stores those variable and useEffect sets the values (React syntax)

    useEffect(() => {
    fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(result => getData(result));
    }, []);

  return (
    //javascript goes here, above the html 
    <>
    <div>App</div>
    <h1>is this working? lol</h1>
    <a href="http://localhost:3000/">Click Here for Express Backend projects API!</a><br></br>
    <a href={text[0] && text[0].link}>Click here for link from Express backend project 1!</a>
    </>
  )
}

export default App
