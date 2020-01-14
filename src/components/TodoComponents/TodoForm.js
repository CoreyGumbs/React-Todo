import React from 'react';

const TodoForm = ({task, handleChanges, handleSubmit, clearCompleted}) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" value={task} onChange={handleChanges} required/>
                <button type="submit">Submit</button>
                <button type="reset" onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;