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
                <a href="#Projects">Projekte</a>
                <a href="#About">About</a>
                <a className='Kontakt' href="#Contact">Kontakt</a>
            </div>
        </div>
    )
}