import React from 'react';

const TodoList = ({todos}) => {
    return(
        <div>
            {todos.map((todo, idx) => (
                <div key={idx}>
                    <p>Task: {todo.task}</p>
                    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                    <p>ID:{ todo.id }</p>
                </div>
            ))}
        </div>
    );
}


export default TodoList;