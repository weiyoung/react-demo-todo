import React from 'react'
import Todo from './Todo'

export default function Todolist({ todos, toggleTodo }) {
    return (
        todos.map(t => {
            return <Todo key={t.id} todo={t} toggleTodo={toggleTodo} />
        })
    )
}
