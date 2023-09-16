import React, { useState } from 'react';
 
const Task = () => {
    const [text, setText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editInputId, setEditInputId] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [editText, setEditText] = useState("");
 
    function handleSave() {
        const newTask = {
            id: new Date().getTime(),
            taskText: text
        };
        setTasks([...tasks, newTask]);
        setText("");
    }
 
    function handleEdit(id) {
        if (isEditing) {
            const updatedTasks = tasks.map(task => task.id === editInputId ? { ...task, taskText: editText } : task);
            setTasks(updatedTasks);
            setIsEditing(false);
            setEditInputId(null);
            setEditText("");
        } else {
            const taskToEdit = tasks.find(task => task.id === id);
            setIsEditing(true);
            setEditInputId(id);
            setEditText(taskToEdit.taskText);
        }
    }
 
    function handleDelete(id) {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }
 
    return (
        <div>
            <input type="text" value={text} placeholder='Enter Task' onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSave}>Add</button>
 
            <ul>
                {tasks.map(item => (
                    <li key={item.id}>
                        {isEditing && editInputId === item.id
                            ? <>
                                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <button onClick={() => handleEdit(item.id)}>Save</button>
                              </>
                            : <>
                                <span>{item.taskText}</span>
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                              </>
                        }
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
 
export default Task;