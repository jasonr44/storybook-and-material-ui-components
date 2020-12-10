import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import Task, { TaskState } from './components/Task';

function App() {
  return (
    <div className="App">
      <Task {...{
        task: {
          id: '1',
          title: 'Test Task to REMOVE',
          updatedAt: new Date(2018, 0, 1, 9, 0),
          state: TaskState.TASK_INBOX
        },
        onArchiveTask: () => null,
        onPinTask: () => null,
      }} />
    </div>
  );
}

export default App;
