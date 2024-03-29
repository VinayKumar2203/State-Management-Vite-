import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import TaskItem from './TaskItem';



function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const { name, value, type, checked } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    if (formState.task.trim()) {
      setTasks((prevTasks) => [...prevTasks, formState]);
      setFormState({
        task: "",
        completed: false,
        taskAssignedTo: "",
      });
    }
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" />
          <label>
            Completed:
            <input name="completed" type="checkbox" />
          </label>
          <select name="taskAssignedTo">
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem 
        key={index}
         item={item} 
         onDelete={handleDelete}
          onToggle={handleToggle}
         />
      ))}
    </>
  );
}

export default App;
