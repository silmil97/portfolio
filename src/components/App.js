import './App.css';
import { NavBar } from './Deutsch/NavBar';
import { Pages } from './Deutsch/Pages';
import React from 'react';
import { useState } from 'react';

function App() {
  const [Page, setPage] = useState('home')
  const handleNavBarClick = (page) => {setPage(page)}

  return (
    <div className="App">
      <header>
        <NavBar onClick={handleNavBarClick} /> 
      </header>
      <Pages activePage={Page}/>
    </div>
  );
}

export default App;
