import React from 'react';

const ShowTask = ({tasks, removeTask}) => {
  const taskList = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="collection-item" key={task.id}>
          <span onClick={() => {removeTask(task.id)}}> { task.content }</span>
        </div>
      )
    })
  ) : (
    <p className="center"> No tasks left !!</p>
  );
  return (
    <div className="todos collection">
      {taskList}
    </div>
  )
};

export default ShowTask;