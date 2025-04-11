import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState<string[]>([
    "Eat breakfast",
    "Shower",
    "Work",
  ]);
  const [newTask, setNewTask] = useState<string>();

  function handleInputChange(val: string) {
    setNewTask(val);
  }

  function addTask() {
    if (newTask && newTask.trim() !== "") {
      setTasks((t) => [...t, newTask.trim()]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const remainingTasks = tasks.filter((_, i) => i !== index);
    setTasks(remainingTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks: string[] = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks: string[] = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((t, i) => (
          <li key={i}>
            <span className="task">{t}</span>
            <button onClick={() => deleteTask(i)} className="delete-button">
              Delete
            </button>
            <button onClick={() => moveTaskUp(i)} className="move-button">
              Up
            </button>
            <button onClick={() => moveTaskDown(i)} className="move-button">
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
