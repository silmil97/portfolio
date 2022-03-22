import { useState } from "react";
import { TaskForm } from './TaskForm';
import { TaskList } from "./TaskList";
import './ToDoList.css'


export function ToDoList() {
    const [input, setInput] = useState('');
    const [key, setKey] = useState('56568');
    const [tasks, setTasks] = useState([{ key: 8908, task: 'First Todo' }, { key: 7777, task: 'Second Todo'}])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    function createTask(task) {
        setKey(Math.floor(Math.random() * 100000));
        tasks.push(
            {
                key: key,
                task: task
            }
        );
    }

    function handleDelete(key) {
        setTasks(tasks.filter((item) => item.key !== key))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            createTask(input);
            setInput('');
        }
    }


    return (
        <div className="ToDoList">
            <TaskForm
                input={input}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <TaskList tasks={tasks} delete={handleDelete} />
        </div>
    )
}

