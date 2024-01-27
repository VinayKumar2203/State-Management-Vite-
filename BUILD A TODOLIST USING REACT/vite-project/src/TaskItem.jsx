// TaskItem.js
import React from 'react';

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <div style={{ color: item.completed ? 'green' : 'black' }}>
      <p>{item.task}</p>
      <p>Assigned to: {item.taskAssignedTo}</p>
      <button onClick={() => onDelete(item)}>Delete Task</button>
      <button onClick={() => onToggle(item)}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;
