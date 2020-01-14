import React from 'react';

const TodoSearch = ({value, handleChanges, searchSubmit}) => {
    return(
        <div className="search-container">
            <form onSubmit={searchSubmit} id='search-form'>
                <label id="search-form-label">Search:</label>
                <input id="search-form-input"type="text" name="search" value={value}  onChange={handleChanges} required placeholder="Search Tasks..."/>
                <button id="search-form-btn" type="submit">Go</button>
            </form>
        </div>
    )
}

export default TodoSearch;