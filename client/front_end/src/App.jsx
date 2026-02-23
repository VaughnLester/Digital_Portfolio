import './index.css';
import NavBar from "./components/navbar";
import Header from "./components/header";
import PageContent from "./components/page_content";
import Footer from "./components/footer";


const App = () => {
    //javascript goes here:

  return (
    <>
    <div className='app'>
        <section className='Header'>
            <div className='container'><div className='flex'><Header /></div></div>
        </section>
        <section className='NavBar'>
            <div className='container'><div className='flex'><NavBar /></div></div>
        </section>
        <section className='PageContent'>
            <div className='container'><div className='grid'><PageContent /></div></div>
        </section>
        <section className='Footer'>
                <div className='container'><div className='flex'><Footer /></div></div>
        </section>
    </div>
    </>
  )
}

export default App
