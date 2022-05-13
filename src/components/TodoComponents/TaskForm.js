import './TaskForm.css'
export function TaskForm(props) {
    const input = props.input;
    const handleSubmit = props.onSubmit;
    const handleChange = props.onChange;

    return (
        <form onSubmit={handleSubmit} >
            <input
                id='toDoInput'
                type="text"
                value={input}
                placeholder="Add Task"
                onChange={handleChange}
                name="text"
                autoComplete="off"
            />
            <button  className='AddTask'>
                Add Task
            </button>

        </form>
    )
}