import { useState, useEffect } from 'react'
import './Grid.css'

function X() {
    return (
        <div className='xcontainer' >
            <div className='x1'></div>
            <div className='x2'></div>
        </div>
    )
}
  

function O() {
    return (
        <div className='O-nimation'>
            <div className='O'></div>
        </div>
    )
}

function calculateWinner(fields) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
        return [fields[a], i];
      }
    }
    return null;
}


function Field(props) {
    const id = props.id
    const value = props.value
    const handleClick = props.onClick

    return (
        <button id={id} className="gridfield" onClick={handleClick}>
            {value == "X" ? (<X />) : value == "O" ? (<O />) : <div></div>}
        </button>
    )
}


export function Grid() {
    const [turnCount, setTurnCount] = useState(0);
    const [value, setValue] = useState(
        {"0": "", "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", "8": "" }
    );
    const [winner, setWinner] = useState([]);

    const handleClick = (val) => {
        if (winner[0] != null) { return }
        if (value[val] != "") { return };
        if (turnCount % 2 == 0) {
            setValue({ ...value, [val]: "X" });
            if(calculateWinner({ ...value, [val]: "X" })!= null) {setWinner(calculateWinner({ ...value, [val]: "X" }))};
        } else {
            setValue({ ...value, [val]: "O" });
            if(calculateWinner({ ...value, [val]: "O" })!= null) {setWinner(calculateWinner({ ...value, [val]: "O" }))};
        }
        setTurnCount(turnCount + 1);                
    }

    const handleNewGame = () => {
        setValue({"0": "", "1": "", "2": "", "3": "", "4": "", "5": "", "6": "", "7": "", "8": "" });
        setWinner([]);
    }
    
    return (
        <div>
            <div className="game">
                {winner[0] == "X" ?  <div className="winner">Winner X</div> : winner[0] == "O" ? <div className="winner">Winner O</div> : <></>}
                {winner[0] != null ? <div className='winnerLine' id={`winnerLine${winner[1]}`}></div> : <></>}   
                <div className="grid">
                    <Field id="TL" value={value[0]} onClick={() => { handleClick("0") }} />
                    <Field id="TC" value={value[1]} onClick={() => { handleClick("1") }} />
                    <Field id="TR" value={value[2]} onClick={() => { handleClick("2") }} />
                    <Field id="CL" value={value[3]} onClick={() => { handleClick("3") }} />
                    <Field id="CC" value={value[4]} onClick={() => { handleClick("4") }} />
                    <Field id="CR" value={value[5]} onClick={() => { handleClick("5") }} />
                    <Field id="BL" value={value[6]} onClick={() => { handleClick("6") }} />
                    <Field id="BC" value={value[7]} onClick={() => { handleClick("7") }} />
                    <Field id="BR" value={value[8]} onClick={() => { handleClick("8") }} />
                </div>
            </div>
            <button className='newGame' onClick={() => handleNewGame()}>New Game</button> 
        </div>
    )
}