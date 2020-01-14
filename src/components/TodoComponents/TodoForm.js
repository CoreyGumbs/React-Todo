import React from 'react';

const TodoForm = ({task, handleChanges, handleSubmit, clearCompleted}) => {
    return(
        <div>
            <h2 id="app-sub-header">Enter Your New Task</h2>
            <form id="todo-add-form" onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" value={task} onChange={handleChanges} placeholder="Add Tasks..." required/>
                <button type="submit">Submit</button>
                <button type="reset" onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;