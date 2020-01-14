import React from 'react';

const TodoSearch = ({value, handleChanges, searchSubmit}) => {
    return(
        <form onSubmit={searchSubmit}>
            <label>Search:  </label>
            <input type="text" name="search" value={value}  onChange={handleChanges}/>
            <button type="submit">Go</button>
        </form>
    )
}

export default TodoSearch;