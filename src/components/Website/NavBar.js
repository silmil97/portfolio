import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function NavBar() {
    const [lang, setLang] = useState('en');

    return (
        <div className="topnav" id="myTopnav">
            <div className='Language'>
                <Link className="link" to='de/' onClick={() => setLang('de')}>DE</Link>
                <Link className="link" to='en/' onClick={() => setLang('en')}>EN</Link>
            </div>
            {    
                lang == 'de' 
                ?
                    (
                        <div className='NavLinks'>
                            <Link className="link" to="de/">Home</Link>
                            <Link className="link" to="de/projekte">Projekte</Link>
                            <Link className="link" to="de/about">About</Link>
                            <Link className="link" to="de/kontakt">Kontakt</Link>
                        </div>
                    ) 
                :
                (
                    <div className='NavLinks'>
                        <Link className="link" to="en/">Home</Link>
                        <Link className="link" to="en/projekte">Projects</Link>
                        <Link className="link" to="en/about">About</Link>
                        <Link className="link" to="en/kontakt">Contact</Link>
                    </div>
                )
            }
        </div>
    )
}