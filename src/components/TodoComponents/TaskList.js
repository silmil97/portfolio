import './TaskList.css'

export function TaskList(props) {
    const handleDelete = props.delete
    const tasks = props.tasks

    return (

        <div className='tasks'>
            {tasks.map(taskObj => (
                <div
                    className='task'
                    key={taskObj.key}
                >
                    <p className='taskText'>
                        {taskObj.task}
                    </p>
                    <button type='button' onClick={() => handleDelete(taskObj.key)}>X</button>
                </div>)
            )
            }
        </div>
    )
}

