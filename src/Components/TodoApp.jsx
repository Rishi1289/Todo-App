import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTask("");
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  return (
    <div className="todo-container">

      <h1>Todo-App</h1>

      <p className="subtitle">
        Manage your daily tasks
      </p>

      <form onSubmit={addTodo} className="todo-form">

        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(event) =>
            setTask(event.target.value)
          }
        />

        <button type="submit">
          Add
        </button>

      </form>

      <div className="todo-list">

        {todos.length === 0 ? (
          <p className="empty-message">
            No tasks yet. Add your first task!
          </p>
        ) : (
          <ul>

            {todos.map((todo) => (
              <li key={todo.id}>

                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    completeTodo(todo.id)
                  }
                />

                <span
                  className={
                    todo.completed
                      ? "completed"
                      : ""
                  }
                >
                  {todo.text}
                </span>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteTodo(todo.id)
                  }
                >
                  Delete
                </button>

              </li>
            ))}

          </ul>
        )}

      </div>

    </div>
  );
}

export default TodoApp;