
import { list } from 'postcss';
import React, { useEffect, useState } from 'react'

const Todolist = () => {

    const [lists, setLists] = useState(() => {
        const data = localStorage.getItem("todos");
        return data ? JSON.parse(data) : [];
    });

    const [task, setTask] = useState("");
    const [CompletedTask,setCompletedTask] = useState(() => {
        const idxs = localStorage.getItem("completedTasks");
        return idxs ? JSON.parse(idxs) : [];
    });

    console.log(CompletedTask)

    const addtask = () => {

        if(!task) return;

        setLists([...lists, task]);
        setTask("");
    }

    const deleteTask = (index) => {
        const newList = lists.filter((_,i) => i !== index);
        setLists(newList);
    }

    const editTask = (index) => {
        const newtxt = prompt("Edit task: ");

        if(!newtxt) return;

        const updatedlist = [...lists];
        updatedlist[index] = newtxt;
        setLists(updatedlist);
    }

    const completeTask = (index) =>{

        if(CompletedTask.includes(index)){
            setCompletedTask(CompletedTask.filter(i => i != index));
        }
        else{
            setCompletedTask([...CompletedTask,index]);
        }
    }

    // add data on local storage when todos changes 
    useEffect(() =>{
        localStorage.setItem("todos",JSON.stringify(lists));
        localStorage.setItem("completedTasks",JSON.stringify(CompletedTask));
    },[lists,CompletedTask])

    return (
        <div className='min-h-screen bg-purple-900 flex flex-col items-center'>
            <h1 className='text-white text-6xl'>Todo List</h1>

            <div>
                {/* <input
                    type='text'
                    placeholder='search todos'
                    className='px-3 py-1.5 bg-purple-950 border border-purple-950 mt-10 w-xl rounded-sm text-white'
                /> */}

                <ul className='text-white text-2xl font-bold bg-purple-800 mt-10 p-3 space-y-3 rounded-lg'>

                    {lists.map((list, index) => {
                        return (
                            <li 
                                className='bg-purple-700 p-3 rounded flex justify-between items-center'
                                key={index}
                            >
                                
                                <span className={CompletedTask.includes(index) ? "line-through" : ""}>{list}</span>
                                
                                <div className='flex gap-2'>
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => editTask(index)}
                                >✒️</button>
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => deleteTask(index)}
                                >✂️</button>

                                <button 
                                    className='cursor-pointer'
                                    onClick={() => completeTask(index)}
                                >✔️</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <h1 className='text-white text-3xl font-bold mt-7'>Add a new todo</h1>
            <input
                type='text'
                className='px-3 py-1.5 bg-purple-950 border border-purple-950 mt-2 w-xl rounded-sm text-white'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button
                className='text-purple-900 bg-white mt-6 py-2 px-5 rounded-lg cursor-pointer'
                onClick={addtask}
            >Submit</button>
        </div>
    )
}

export default Todolist
