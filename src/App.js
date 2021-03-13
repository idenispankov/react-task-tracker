import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  function deleteTaskClick(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskClick}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;
