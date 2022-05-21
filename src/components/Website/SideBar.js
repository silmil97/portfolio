import React from 'react';
import './SideBar.css'
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default props => {
    const [lang, setLang] = useState('en');
    return (
        <Menu styles={{backgroundcolor:'green'}}>
            <Link className="menu-item" to="de/" onClick={() => setLang('de')}>DE</Link>
            <Link className="menu-item" to="en/" onClick={() => setLang('en')}>EN</Link>
            <Link className="menu-item" to={lang == 'de' ? "de/" : "en"}>Home</Link>
            <Link className="menu-item" to={lang == 'de' ? "/de/projekte" : "/en/projekte"}>{lang == 'de' ? 'Projekte' : 'Projects'}</Link>
            <Link className="menu-item" to={lang == 'de' ? "/de/about" : "/en/about"}>About</Link>
            <Link className="menu-item" to={lang == 'de' ? "/de/kontakt" : "/en/kontakt"}>{lang == 'de' ? 'Kontakt' : 'Contact'}</Link>
        </Menu>

    );
};