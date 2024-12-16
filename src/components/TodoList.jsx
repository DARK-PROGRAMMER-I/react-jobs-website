import { useState } from "react";

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addNewTask = ()=>{

    }

    const removeTask = (index)=>{

    }

    const taskChange = (event)=>{

    }

    const moveTaskUp =  (index)=>{

    }

    const moveTaskDown = (index) =>{

    }

    return (
        <>
            <div >
                <h1>
                    My Todo List
                </h1>
                <input type="text" placeholder="Enter a Task" /> <button>Add</button>
                <ol>
                    {
                        todos.map(todo)
                    }
                </ol>
            </div>
        </>
    );
}

export default TodoList