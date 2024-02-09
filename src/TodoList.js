import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: Date.now() }])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    return (
        <>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        task={todo.task}
                        remove={() => removeTodo(todo.id)}
                    />)}
            </div>
        </>
    );
}

export default TodoList