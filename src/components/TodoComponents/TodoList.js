import React from 'react';

//components
import Todo from './Todo';

const TodoList = ({todos}) => {
    return(
        <div>
            {todos.map((todo, idx) => (
                <div key={idx}>
                    <Todo todo={todo} />
                </div>
            ))}
        </div>
    );
}


export default TodoList;