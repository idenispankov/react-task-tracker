import Task from './Task';

const Tasks = ({ tasks, onDeleteClick, onToggleClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDeleteClick}
          onToggle={onToggleClick}
        />
      ))}
    </>
  );
};

export default Tasks;
