import './App.css';
import Header from "./pages/Header.jsx"
import Footer from "./pages/Footer.jsx"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact12.jsx"
import About from "./pages/About.jsx"
import Services from "./pages/Services"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
  </div>
  );
}

export default App;
