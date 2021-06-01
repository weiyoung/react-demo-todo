import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoToggle() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.done} onChange={handleTodoToggle} />
                {todo.name}
            </label>
        </div>
    )
}
