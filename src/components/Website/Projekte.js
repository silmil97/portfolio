import { Calculator } from '../CalcComponents/Calculator'
import { useState } from 'react';
import { ToDoList } from '../TodoComponents/ToDoList';
import './Projekte.css';


export function Projekte() {
    const [visibleDemo, setVisibileDemo] = useState('');

    return (
        <div className='Projects' id='Projects'>
            <h2><span>M</span>eine <span>P</span>rojekte</h2>
            <h3>Eine Todoliste</h3>
            <div className='Project'>
                {
                    visibleDemo == 'toDoList'
                        ? <ToDoList className='ToDoList' />
                        : (
                            <div className='ProjectDescription'>
                                <div className='List-pic'></div>
                                <div className='description'>
                                    <p>Eine simple Todoliste, der man Aufgaben hinzufügen kann.</p>
                                    <p>Benutzte Technologien: React.js, CSS, JSX.</p>
                                </div>
                            </div>
                        )
                }
            </div>
            <button className='ProjectButton' onClick={() => { visibleDemo == 'toDoList' ? setVisibileDemo('') : setVisibileDemo('toDoList') }}>Demo</button>
            <a href='https://github.com/silmil97/ToDoList' target='_blank'><button className='ProjectButton'>Code</button></a>
            <h3>Ein Taschenrechner</h3>
            {
                visibleDemo == 'calculator'
                    ? (

                            <Calculator className='Caclculator' />
                            
                    )
                    : (
                        <div className='Project'><div className='ProjectDescription'>
                            <div className='Calc-pic'></div>
                            <div className='description'>
                                <p>Ein Taschenrechner, der ein String umwandelt und ausrechnet.</p>
                                <p>Benutzte Technologien: React.js, CSS, JSX.</p>
                            </div>
                        </div>
                        </div>)
            }
            <button className='ProjectButton' onClick={() => { visibleDemo == 'calculator' ? setVisibileDemo('') : setVisibileDemo('calculator') }}>Demo</button>
            <a href='https://github.com/silmil97/Calculator' target='_blank'><button className='ProjectButton'>Code</button></a>
        </div>
    );
}