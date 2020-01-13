import React from 'react';

const TodoList = ({todos}) => {
    return(
        <div>
            {todos.map((todo, idx) => (
                <div key={idx}>
                    <p>{todo.task}</p>
                </div>
            ))}
        </div>
    );
}


export default TodoList;