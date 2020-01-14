import React from 'react';

const TodoSearch = ({value, handleChanges, searchSubmit}) => {
    return(
        <form onSubmit={searchSubmit}>
            <input type="text" name="search" value={value}  onChange={handleChanges}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default TodoSearch;