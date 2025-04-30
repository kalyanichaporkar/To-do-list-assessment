import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../services/taskService';

export default function TaskForm({ selectedTask, refresh }) {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (selectedTask) setTask(selectedTask);
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task.id, task).then(refresh);
    } else {
      createTask(task).then(refresh);
    }
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} onChange={e => setTask({ ...task, title: e.target.value })} placeholder="Title" required />
      <textarea value={task.description} onChange={e => setTask({ ...task, description: e.target.value })} placeholder="Description" />
      <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
}
