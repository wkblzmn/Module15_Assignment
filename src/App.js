import React, { useState } from 'react';

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { id: Date.now(), description: task, isComplete: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
