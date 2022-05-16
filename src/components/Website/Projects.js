import { Calculator } from '../CalcComponents/Calculator'
import { useState } from 'react';
import { ToDoList } from '../TodoComponents/ToDoList';
import './Projekte.css';


export function Projects() {
    const [visibleDemo, setVisibileDemo] = useState('');

    return (
        <div className='Projects' id='Projects'>
            <h2><span>M</span>y <span>P</span>rojects</h2>
            <h3>A Todolist</h3>
            <div className='Project'>
                {
                    visibleDemo == 'toDoList'
                        ? <ToDoList className='ToDoList' />
                        : (
                            <div className='ProjectDescription'>
                                <div className='List-pic'></div>
                                <div className='description'>
                                    <p>A simple Todolist with the possibility to add Tasks and remove them.</p>
                                    <p>Used Technologies: React.js, CSS, JSX.</p>
                                </div>
                            </div>
                        )
                }
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'toDoList' ? setVisibileDemo('') : setVisibileDemo('toDoList') }}>Demo</button>
            <a href='https://github.com/silmil97/ToDoList' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>A Calculator</h3>
            {
                visibleDemo == 'calculator'
                    ? (

                            <Calculator className='Caclculator' />
                            
                    )
                    : (
                        <div className='Project'><div className='ProjectDescription'>
                            <div className='Calc-pic'></div>
                            <div className='description'>
                                <p>A calculator converting a and calculating a String without the use of eval().</p>
                                <p>Used Technologies: React.js, CSS, JSX.</p>
                            </div>
                        </div>
                        </div>)
            }
            <button className='ProjectButton' onClick={() => { visibleDemo == 'calculator' ? setVisibileDemo('') : setVisibileDemo('calculator') }}>Demo</button>
            <a href='https://github.com/silmil97/Calculator' target='_blank'><button className='ProjectButton'>Code</button></a>
        </div>
    );
}