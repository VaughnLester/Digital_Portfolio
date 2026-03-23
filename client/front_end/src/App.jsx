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
    <div className="bg-gray-100 min-h-screen max-w-6xl mx-auto px-6 py-10">
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

