import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete, setEditedTask, setChangeStatus }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem
            task={task}
            onDelete={onDelete}
            onEdit={setEditedTask}
            onChangeStatus={setChangeStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
