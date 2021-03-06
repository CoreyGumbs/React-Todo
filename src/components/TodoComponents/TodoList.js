import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({todos, toggleCompleted}) => {
    return(
        <div className="task-list-container">
            {todos.map((todo, idx) => (
                <div key={idx} onClick={() => toggleCompleted(todo.id)}>
                    <Todo todo={todo} />
                </div>
            ))}
        </div>
    );
}


export default TodoList;