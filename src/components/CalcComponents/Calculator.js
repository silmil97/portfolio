import { useState, useEffect } from 'react';
import { Buttons } from "./Buttons";
import { Textfield } from './TextField';
import { handleCalculation, checkDot, display } from './CalculatorLogic';
import "./Calculator.css";


const operators1 = {
    '*': 'x',
    '/': '÷',
    '+': '+',
    '-': '-',
    '.': '.'
}


export function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        if (e.target.id == 'AC') {
            setInput('');
            return;
        }

        if (e.target.id == 'DEL') {
            setInput(input.slice(0, -1));
            return;
        }

        if (input.includes('e')) {
            alert('Number is too big or too small');
            return;
        }

        if (isFinite(e.target.id)) {
            setInput(input + e.target.id);
            return;
        }

        if (e.target.id == 'equals') {
            let result = handleCalculation(display());
            setInput(result.toString());
            return;
        }

        if (Object.values(operators1).includes(e.target.id) && !Object.values(operators1).includes(input[input.length - 1]) && input != '') {
            if (e.target.id != '.') {
                setInput(input + e.target.id);
                return;
            }

            if (!checkDot(display())) {
                setInput(input + e.target.id);
                return;
            }
        }
    }

    const handleKeyPress = (e) => {
        if (e.key == 'Backspace') {
            setInput(display().slice(0, -1));
            return;
        }

        if (display().includes('e')) {
            alert('Number is too big or too small');
            return;
        }

        if (e.key == ' ') { return; }

        if (isFinite(e.key) && e.key != ' ') {
            setInput(display() + e.key);
            return;
        }

        if ((e.key == '=' || e.key == 'Enter') && typeof handleCalculation(display()) == "number" && !Object.values(operators1).includes(display()[display().length - 1])) {
            let result = handleCalculation(display());
            setInput(result.toString());
            return;
        }

        if (Object.keys(operators1).includes(e.key) && !Object.values(operators1).includes(display()[display().length - 1]) && display() != '') {
            if (e.key != '.') {
                setInput(display() + operators1[e.key.toString()]);
                return;
            }

            if (!checkDot(display())) {
                setInput(display() + operators1[e.key.toString()]);
                return;
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }

    }, [])

    return (
        <div className='Calculator'>
            <Textfield value={input} />
            <Buttons input={input} onclick={handleClick} />
        </div>
    );
}