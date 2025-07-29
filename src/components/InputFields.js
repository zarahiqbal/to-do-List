import { useRef } from "react";
function InputFields({tasks, setTasks}) {
 
  const inputValueRef = useRef('');
  const inputDateRef = useRef('');
  const addTask = () => {
    const inputValue = inputValueRef.current.value;
    const inputDate = inputDateRef.current.value;
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
    inputValueRef.current.value = '';
    inputDateRef.current.value = '';
    }
  };

  return(
    <div>
            <input
              className='input'
              type="text"
              ref={inputValueRef}
              placeholder="Enter a task"
            />
            <input
              className='input'
              type="date"
              ref ={inputDateRef}
              placeholder="Select a date"   
              />
            <button className='button button-hover' onClick={addTask}>Add Task</button>
          </div>    
  );
}
export default InputFields;