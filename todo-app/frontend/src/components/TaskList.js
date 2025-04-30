import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/taskService';

export default function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>To-Do List</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => {
            deleteTask(task.id).then(() => setTasks(tasks.filter(t => t.id !== task.id)));
          }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
