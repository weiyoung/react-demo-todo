import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'

const LOCAL_STORAGE_KEY = 'MyTodos'

export default function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []) // this hook will run only once

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) // this hook will run everytime todos is changed
  
  function handleAdd() {
    const name = todoNameRef.current.value
    if (name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.random(), name: name, done: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClear() {
    const undoneTodos = todos.filter(todo => !todo.done)
    setTodos(undoneTodos)
  }
  
  function toggleTodo(id) {
    const newTodos = [...todos] // we don't wanna change todos, we wanna make a copy of todos first
    const todo = newTodos.find(t => t.id === id)
    todo.done = !todo.done
    setTodos(newTodos)
  }

  return (
    <>
      <p>Todo List:</p>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAdd}>Add Task</button>
      <button onClick={handleClear}>Clear Finished Tasks</button>
      <div>{todos.filter(todo => !todo.done).length} tasks left</div>
    </>
  );
}