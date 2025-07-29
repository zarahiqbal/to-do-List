import { useState } from "react";
function InputFields({tasks, setTasks}) {
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const addTask = () => {
    if (inputValue.trim() === '' || inputDate === '') {
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
    }
  };
  return(
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
  );
}
export default InputFields;