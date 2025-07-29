import { useState } from 'react';
function ToggleOptions({tasks}) {
      const [showCompleted, setShowCompleted] = useState(false); 
      const filteredTasks = showCompleted
    ? tasks.filter(task => task.completed)
    : tasks;
  return (
    <>
      <h2>{showCompleted ? 'Completed Tasks' : 'Tasks List'}</h2>
      {filteredTasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>

              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {showCompleted ? task.name : task.name}
              </span>
            </li>
          ))}
        </ul>
        
      )}
      {tasks.length > 0 && (
           <button
             className='button button-hover'
             onClick={() => setShowCompleted(prev => !prev)}
           >
             {showCompleted ? 'Show All Tasks' : 'Completed Tasks'}
           </button>
         )}
    </>
  );
}
export default ToggleOptions;