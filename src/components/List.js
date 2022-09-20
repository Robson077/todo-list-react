import React from 'react'
import "./List.css"

const List = ({ tasks }) => {
    return (
        <ul>
            <li>{tasks}</li>
        </ul>
    )
}

export default List