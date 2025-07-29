function TaskTable({ tasks, setTasks}) {
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
  return (
    <div>
          <h2>Task Table</h2>

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
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.id}</td>
            <td>{task.Date}</td>
            <td>{task.completed ? '✔️' : 'No'}</td>
            <td>
              <button className='button button-hover' onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className='button button-hover' onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default TaskTable;