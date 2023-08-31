import React, { useState } from "react";
export default function Addtodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be empty");
    }
    else{
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          <small id="titleHelp" className="form-text text-muted">
            Add your title!
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
          <small id="titleHelp" className="form-text text-muted">
                        Add your Description here!
                    </small>
        </div>
        <button type="submit" className="btn btn-success btn-sm my-3">
          AddToDo
        </button>
      </form>
    </div>
  );
}
