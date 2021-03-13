import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
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

  function addTaskClick() {
    setShowAddTask(!showAddTask);
  }

  function saveTaskClick(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  function deleteTaskClick(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleReminderClick(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  return (
    <div className='container'>
      <Header onAdd={addTaskClick} />
      {showAddTask && <AddTask onAddClick={saveTaskClick} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteClick={deleteTaskClick}
          onToggleClick={toggleReminderClick}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
};

export default App;
