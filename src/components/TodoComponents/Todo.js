import React from 'react';

const Todo= ({todo}) => {
    return(
        <>
            <p>Task: {todo.task}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p>ID:{ todo.id }</p>
        </>
    )
}

export default Todo;