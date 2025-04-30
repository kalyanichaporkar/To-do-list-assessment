import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <h1>To-Do App</h1>
      <TaskForm selectedTask={selectedTask} refresh={refresh} />
      <TaskList onEdit={setSelectedTask} key={refreshFlag} />
    </div>
  );
}

export default App;
