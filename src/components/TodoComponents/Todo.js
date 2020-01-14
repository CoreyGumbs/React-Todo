import React from 'react';

const Todo= ({todo}) => { 
    return(
        <div className={todo.completed ? "todo-task-container task-completed" :"todo-task-container"}>
            <h3 className={todo.completed ? 'todo-task-content completed': 'todo-task-content'}>{todo.task}</h3>
            <p className={'todo-task-content'}>
                {todo.completed ? <span id="complete-yes">Completed</span>:<span id="complete-no"> Not Completed</span>}
            </p>
            <p className={'todo-task-content todo-id'}>ID:{ todo.id }</p>
        </div>
    )
}

export default Todo;