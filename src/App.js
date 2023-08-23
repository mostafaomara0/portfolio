import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import NewSkills from './components/NewSkills';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
       <NavBar />
      <Banner />
      <Skills/>
      <div style={{marginTop:"100px"}}></div>
      
      <NewSkills/>
      <div style={{marginTop:"200px"}}></div> 
      < Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
