import React from 'react';

const TodoForm = ({task, handleChanges, handleSubmit, clearCompleted}) => {
    return(
        <div>
            <h2 id="app-sub-header">Enter Your New Task</h2>
            <form id="todo-add-form" onSubmit={handleSubmit}>
                <input  id="todo-add-input" type="text" name="task" value={task} onChange={handleChanges} placeholder="Add Tasks..." required/>
                <button id="todo-add-submitBtn" className="todo-add-btn" type="submit">Submit</button>
                <button id="todo-add-clearBtn"className="todo-add-btn" type="reset" onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;