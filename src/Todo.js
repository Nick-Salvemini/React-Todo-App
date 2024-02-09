import React from "react";

function Todo({ task, remove }) {
    const containerStyles = {
        display: 'block'
    }

    const tastStyles = {
        display: 'inline'
    }

    return (
        <div style={containerStyles}>
            <p style={tastStyles}>{task}</p>
            <button style={tastStyles} onClick={remove}>X</button>
        </div>
    )
}

export default Todo