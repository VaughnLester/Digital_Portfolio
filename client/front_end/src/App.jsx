import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from "./components/navbar";
import Header from "./components/header";
import PageContent from "./components/page_content";
import Footer from "./components/footer";
import About from "./pages/about";

const App = () => {
    //javascript goes here:

  return (
    <>
    <div className='app'>
        <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
            <Route path="/" element={<PageContent />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
    </>
  )
}

export default App

