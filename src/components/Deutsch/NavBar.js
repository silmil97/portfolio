import './NavBar.css'

export function NavBar(props) {
    const handleClick = props.onClick
    return (
        <div className="topnav" id="myTopnav">
            <div className='Language'>
                <a onClick={handleClick}>DE</a>
                <a onClick={handleClick}>EN</a>
            </div>
            <div className='NavLinks'>
                <button onClick={() => handleClick('home')}>Home</button>
                <button onClick={() => handleClick('projects')}>Projekte</button>
                <button onClick={() => handleClick('about')}>About</button>
                <button onClick={() => handleClick('contact')}>Kontakt</button>
            </div>
        </div>
    )
}