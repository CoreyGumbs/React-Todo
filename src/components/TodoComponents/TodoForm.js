import React from 'react';

const TodoForm = ({task, handleChanges}) => {
    return(
        <div>
            <form action="">
                <input type="text" name="task" id="task" value={task} onChange={handleChanges}/>
                <button type="submit">Submit</button>
                <button type="reset">Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;