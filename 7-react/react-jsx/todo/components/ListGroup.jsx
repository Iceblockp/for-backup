import React, { useState } from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";

const ListGroup = ({ tasks, deleteTask, doneTask,updateTaskJob, doneAllTask }) => {
  return (
    <div>
      <EmptyStage />
      {tasks.map(({ id, job, isDone }) => (
        <List
          key={id}
          job={job}
          isDone={isDone}
          id={id}
          updateTaskJob={updateTaskJob}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
      ))}
      <div className=" flex justify-end">
        <button onClick={doneAllTask} className=" bg-gray-400 px-2 py-1 rounded-md">All Done</button>
      </div>
    </div>
  );
};

export default ListGroup;
