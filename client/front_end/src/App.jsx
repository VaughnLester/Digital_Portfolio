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
    <Header />
    <NavBar />
    <section>
        <div className='container'>
            <div className='grid'>
                <PageContent />
                <PageContent />
                <PageContent />
            </div>
        </div>
    </section>
    <Footer />
    </div>
    </>
  )
}

export default App
