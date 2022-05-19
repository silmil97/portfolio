import { Calculator } from '../CalcComponents/Calculator'
import { useState } from 'react';
import { Grid } from '../TicTacToe/Grid';
import { ToDoList } from '../TodoComponents/ToDoList';
import { useSpring, a, config } from 'react-spring';
import './Projekte.css';


export function Projects() {
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
            <h2><span>M</span>y <span>P</span>rojects</h2>
            <h3>A Todolist</h3>
            <div className='Project'>
                <div className='ProjectDescription'>
                    <div className='List-pic'></div>
                    <div className='description'>
                        <p>A simple Todolist with the possibility to add Tasks and remove them.</p>
                        <p>Used Technologies: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles,  }}><ToDoList className='ToDoList' /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'toDoList' ? setVisibileDemo('') : setVisibileDemo('toDoList') }}>Demo</button>
            <a href='https://github.com/silmil97/ToDoList' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>A Calculator</h3>
            <div className='Project'><div className='ProjectDescription'>
                <div className='Calc-pic'></div>
                    <div className='description'>
                        <p>A calculator converting a and calculating a String without the use of eval().</p>
                        <p>Used Technologies: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles2, overflow: "hidden"}}><Calculator className='Caclculator' /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'calculator' ? setVisibileDemo('') : setVisibileDemo('calculator') }}>Demo</button>
            <a href='https://github.com/silmil97/Calculator' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>Tic Tac Toe</h3>
            <div className='Project'>
                <div className='ProjectDescription'>
                    <div className='Tic-pic'></div>
                    <div className='description'>
                        <p>A Tic Tac Toe App</p>
                        <p>Used Technologies: React.js, CSS, JSX.</p>
                    </div>
                </div>
                <a.div style={{ ...slideInStyles3,  margin: 'auto'}}><Grid /></a.div>
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'ticTacToe' ? setVisibileDemo('') : setVisibileDemo('ticTacToe') }}>Demo</button>
            <a href='https://github.com/silmil97/TicTacToe' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>Yelp API App</h3>
            <div className='Project'>
                <div className='ProjectDescription'>
                    <div className='Yelp-pic'></div>
                    <div className='description'>
                        <p>Eine Search engine for Reastaurants using Class Components</p>
                        <p>Used Technologies: React.js, CSS, JSX.</p>
                    </div>
                </div>
            </div>
            <a href='https://github.com/silmil97/Ravenous' target='_blank'><button className='ProjectButton'>Code</button></a>
        </div>
    );
}