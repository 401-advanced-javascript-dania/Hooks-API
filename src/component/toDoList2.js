import React, { useState,useEffect } from 'react';
import useForm from '../hooks/form.js';
function ToDoListTwo() {
    const [formData, setFormData] = useState({});
    const [handleChange, handleInput, handleSubmit, values] = useForm(item);
    const [StatusOfList,setStatusForList]=useState(false);



    function item(list) {
        setFormData(list);
        console.log('list',Object.keys(list).length)
        setStatusForList((Object.keys(list).length)%2===0)  
    }
    useEffect(()=>{
        console.log('item added',Object.keys(formData).length);
        if(Object.keys(formData).length>=1){document.title = `Status of list,${StatusOfList} `}
            },[Object.keys(formData)])
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label>To Do Item Text</label>
                <input name="item" type="text" onChange={handleChange} />
                <label>Assigned To</label>
                <input name="AssignedTo" type="text" onChange={handleChange} />
                <label>Difficulty</label>
                <select name="Difficulty" onChange={handleChange} >
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                </select>
                <button>add to do item</button>
            </form>
            <h2>here are some values from the form hook:</h2>
            {
                Object.keys(values).map((key, idx) => <p key={idx}>{key}:{values[key]}</p>)
            }
            <h2>after the form is submitted</h2>
            {
                Object.keys(formData).map((key, idx) => <p key={idx}>{key}:{formData[key]}</p>)
            }
                <p>Status Of List {StatusOfList.toString()}</p>

        </article>
    )
}

export default ToDoListTwo;