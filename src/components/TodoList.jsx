import { useState } from "react";
import styles from '../styles/TodoList.module.css'

function TodoList() {

    const [todos, setTodos] = useState([
        "Walk for a dog",
        "Do Marriage",
        "Go to Jym",

    ]);
    const [newTask, setNewTask] = useState("");

    const addNewTask = ()=>{
        if(newTask.trim() !== null && newTask.trim() !== ""){
            setTodos(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const removeTask = (index)=>{
        const newList = todos.filter((t, i) => i !== index);
        setTodos(t => newList);
    }

    const taskChange = (event)=>{
        setNewTask(event.target.value);
    }

    const moveTaskUp =  (index)=>{
       if(index > 0){
        const updatedTodos = [...todos];
        [updatedTodos[index], updatedTodos[index-1]] = [updatedTodos[index-1], updatedTodos[index]]
        setTodos(updatedTodos);
       }
    }

    const moveTaskDown = (index) =>{
        if(index<todos.length-1){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]]
            setTodos(updatedTodos);
        }
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <h1>
                    My Todo List
                </h1>
                <input type="text" value={newTask} placeholder="Enter a Task" onChange={taskChange}/> 
                <button onClick={addNewTask}>Add</button>
                <ol >
                    {
                        todos.map((todo, index) => <>
                            <li className={styles.todos}>
                                <span>{todo}</span> 
                                <button className={styles.delete} onClick={()=> removeTask(index)}>Delete</button>
                                <button className={styles.up} onClick={()=> moveTaskUp(index)}>👆</button>
                                <button className={styles.up} onClick={()=> moveTaskDown(index)}>👇</button>
                            </li>
                        </>)
                    }
                </ol>
            </div>
        </>
    );
}

export default TodoList