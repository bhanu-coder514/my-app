
import React, { useState } from 'react'

const Todolist = () => {

    const [lists, setLists] = useState([]);
    const [task, setTask] = useState("");

    const addtask = () => {
        setLists([...lists, task]);
        setTask("");
    }

    const deleteTask = (index) => {
        const newList = lists.filter((_,i) => i !== index);
        setLists(newList);
    }

    return (
        <div className='min-h-screen bg-purple-900 flex flex-col items-center'>
            <h1 className='text-white text-6xl'>Todo List</h1>

            <div>
                <input
                    type='text'
                    placeholder='search todos'
                    className='px-3 py-1.5 bg-purple-950 border border-purple-950 mt-10 w-xl rounded-sm text-white'
                />

                <ul className='text-white text-2xl font-bold bg-purple-800 mt-10 p-3 space-y-3 rounded-lg'>

                    {lists.map((list, index) => {
                        return (
                            <li 
                                className='bg-purple-700 p-3 rounded flex justify-between'
                                key={index}
                            >
                                
                                <span>{list}</span>
                                
                                <button 
                                    className='cursor-pointer'
                                    onClick={() => deleteTask(index)}
                                >✂️</button>
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
