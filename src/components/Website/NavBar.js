import './NavBar.css';
import { Link } from 'react-router-dom';

export function NavBar() {

    return (
        <div className="topnav" id="myTopnav">
            <div className='Language'>
                <a className="link" href='/de/'>DE</a>
                <a className="link" href='/en/'>EN</a>
            </div>
            {    
                window.location.pathname == '/de/' 
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