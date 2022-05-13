import { AboutDe } from './AboutDe';
import { Projekte } from './Projekte'
import { CoverDe } from './CoverDe';
import { Kontakt } from './Kontakt';

export function Pages(props) {
    const activePage = props.activePage
    const activePageFunction = (Page) => {
        switch(Page) {            
            case 'home':
                return <div className="App-header"> <CoverDe /></div>;
            case 'projects':
                return  <Projekte className="Projekte"/>;
            case 'about':
                return  <AboutDe />; 
            case 'contact':
                return <Kontakt />      
        }
    }

    return (
        <main>
            {activePageFunction(activePage)}    
        </main>
    )
}