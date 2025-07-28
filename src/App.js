import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [showCompleted, setShowCompleted] = useState(false); 

  const addTask = () => {
    if (inputValue.trim() && inputDate === '') {
      alert("Please enter task and date for the task.");
    } else {
      const newTask = {
        id: 1 + Math.floor(Math.random() * 10000),  
        name: inputValue.trim(),
        completed: false,
        Date: inputDate,
      };        
      setTasks([...tasks, newTask]);
      setInputValue('');
      setInputDate('');
      setShowCompleted(false); 
    }
  };

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = showCompleted
    ? tasks.filter(task => task.completed)
    : tasks;

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
          <div>
            <input
              className='input'
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a task"
            />
            <input
              className='input'
              type="date"
              value={inputDate}
              onChange={(id) => setInputDate(id.target.value)}
              placeholder="Select a date"   
              />
            <button className='button button-hover' onClick={addTask}>Add Task</button>
          </div>        
          <h2>{showCompleted ? 'Completed Tasks' : 'Tasks List'}</h2>
            {filteredTasks.length === 0 ? (
              <p>No tasks to show</p>
            ) : (
              <ul>
                {filteredTasks.map(task => (
                  <li key={task.id}>
                    <span
                      style={{ textDecoration: task.completed ? 'none' : 'none' }}
                    >
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>Task Name</th>
                            <th>Task ID</th>
                            <th>Date</th>
                            <th>Completed</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{task.name}</td>
                            <td>{task.id}</td>
                            <td>{task.Date}</td>
                            <td>{task.completed ? '✔️' : 'No'}</td>
                            <td>
                               <button className='button button-hover' onClick={() => toggleComplete(task.id)}>
                                {task.completed ? 'Undo' : 'Complete'}  </button>
                               <button className='button button-hover' onClick={() => deleteTask(task.id)}>Delete</button>

                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
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
      </header>
    </div>
  );
}

export default App;
