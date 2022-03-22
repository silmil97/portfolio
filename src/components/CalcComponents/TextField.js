import './TextField.css'

export function Textfield(props) {
    const input= props.value
    const result = props.result

    return (

            <div className='display' id='display'>{input}</div> 

    )
}