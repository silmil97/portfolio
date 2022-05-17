import { Calculator } from '../CalcComponents/Calculator'
import { useState } from 'react';
import { Grid } from '../TicTacToe/Grid';
import { ToDoList } from '../TodoComponents/ToDoList';
import { useSpring, a, config } from 'react-spring';
import './Projekte.css';


export function Projekte() {
    const [visibleDemo, setVisibileDemo] = useState('');

    const slideInStyles = useSpring({
        config: { ...config.stiff },
        from: { opacity: 0, height: 0 },
        to: {
          opacity: visibleDemo == 'toDoList' ? 1 : 0,
          height: visibleDemo == 'toDoList' ?  400 : 0
        }
      });

    const slideInStyles2 = useSpring({
        config: { ...config.stiff },
        from: { opacity: 0, height: 0, },
        to: {
          opacity: visibleDemo == 'calculator' ? 1 : 0,
          height: visibleDemo == 'calculator' ?  320 : 0,
        }
    });  

    const slideInStyles3 = useSpring({
        config: { ...config.stiff },
        from: { opacity: 0, height: 0, },
        to: {
          opacity: visibleDemo == 'ticTacToe' ? 1 : 0,
          height: visibleDemo == 'ticTacToe' ?  400 : 0,
        }
    }); 

    return (
        <div className='Projects' id='Projects'>
            <h2><span>M</span>eine <span>P</span>rojekte</h2>
            <h3>Eine Todoliste</h3>
            <div className='Project'>
                <div className='ProjectDescription'>
                    <div className='List-pic'></div>
                    <div className='description'>
                        <p>Eine simple Todoliste, der man Aufgaben hinzufügen kann.</p>
                        <p>Benutzte Technologien: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles,  }}><ToDoList className='ToDoList' /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'toDoList' ? setVisibileDemo('') : setVisibileDemo('toDoList') }}>Demo</button>
            <a href='https://github.com/silmil97/ToDoList' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>Ein Taschenrechner</h3>
            <div className='Project'><div className='ProjectDescription'>
                <div className='Calc-pic'></div>
                    <div className='description'>
                        <p>Ein Taschenrechner, der ein String umwandelt und ausrechnet.</p>
                        <p>Benutzte Technologien: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles2, overflow: "hidden"}}><Calculator className='Caclculator' /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'calculator' ? setVisibileDemo('') : setVisibileDemo('calculator') }}>Demo</button>
            <a href='https://github.com/silmil97/Calculator' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>Tic Tac Toe</h3>
            <div className='Project'>
                <div className='ProjectDescription'>
                    <div className='List-pic'></div>
                    <div className='description'>
                        <p>Eine Tic Tac Toe App</p>
                        <p>Benutzte Technologien: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles3,  margin: 'auto'}}><Grid /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'ticTacToe' ? setVisibileDemo('') : setVisibileDemo('ticTacToe') }}>Demo</button>
            <a href='https://github.com/silmil97/TicTacToe' target='_blank'><button className='ProjectButton'>Code</button></a>
        </div>
    );
}