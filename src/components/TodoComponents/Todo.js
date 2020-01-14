import React from 'react';

const Todo= ({todo}) => { 
    return(
        <>  
            <p className={todo.completed ? 'completed': ' '}>Task: {todo.task}</p>
            <p className={todo.completed ? 'completed': ' '}>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className={todo.completed ? 'completed': ' '}>ID:{ todo.id }</p>
        </>
    )
}

export default Todo;