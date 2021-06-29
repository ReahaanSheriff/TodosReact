
import React, { useState } from 'react';
function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || ! desc){
            alert("Empty fields not allowed");
        }else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
        <h1 className="text-center">Add new Todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) =>{setDesc(e.target.value)}}  className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
