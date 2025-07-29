import './App.css';
import { useState } from 'react';
import InputFields from './components/InputFields';
import ToggleOptions from './components/ToggleAction';
import TaskTable from './components/TaskTable';
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className=" App">
         <header className="App-header">
           <h1>TO DO LIST</h1>
           <div className='content-container'>
            <div className='input-section'>
           <InputFields 
            tasks={tasks}
            setTasks={setTasks}
           />
           </div>
           <div className='table-section'>
           <TaskTable
             tasks={tasks}
             setTasks={setTasks}
           />
           </div>
                       </div>

            <ToggleOptions
            tasks={tasks}
           /> 
         </header>
    </div>
  );
}
export default App;


