import './App.css';
import { NavBar } from './Website/NavBar';
import { CoverDe } from './Website/CoverDe';
import { AboutDe } from './Website/AboutDe';
import { Kontakt } from './Website/Kontakt';
import { Projekte } from './Website/Projekte';
import { CoverEn } from './Website/CoverEn';
import { AboutEn } from './Website/AboutEn';
import { Contact } from './Website/Contact';
import { Projects } from './Website/Projects';
import { Routes, Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header>
        <NavBar /> 
      </header>
      <Routes>
        <Route path="de/" element={<div className="App-header"> <CoverDe /></div>} />
        <Route path="de/about" element={<AboutDe />} />
        <Route path="de/projekte" element={<Projekte className="Projekte"/>} />
        <Route path="de/kontakt" element={<Kontakt />} />
        <Route path="en/" element={<div className="App-header"> <CoverEn /></div>} />
        <Route path="portfolio/" element={<div className="App-header"> <CoverEn /></div>} />
        <Route path="en/about" element={<AboutEn />} />
        <Route path="en/projekte" element={<Projects className="Projekte"/>} />
        <Route path="en/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
