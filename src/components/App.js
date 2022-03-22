import './App.css';
import { NavBar } from './Deutsch/NavBar';
import { AboutDe } from './Deutsch/AboutDe';
import { Projekte } from './Deutsch/Projekte'
import { CoverDe } from './Deutsch/CoverDe';

function App() {
  console.log('hi')
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CoverDe />
      </header>
      <main>
        <AboutDe />
        <Projekte/>
      </main>
    </div>
  );
}

export default App;
