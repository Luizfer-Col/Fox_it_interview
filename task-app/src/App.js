import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskLists";
import TaskForm from "./components/TaskForm";
import styles from "./App.module.css";

const App = () => {
  const storedTasks = localStorage.getItem("tasks");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState(initialTasks);

  const [editedTask, setEditedTask] = useState(null);
  const [titleForm, setTitleForm] = useState("Agrega una nueva tarea");

  useEffect(() => {
    if (editedTask) setTitleForm("Edita tu tarea");
    else setTitleForm("Agrega una nueva tarea");
  }, [editedTask]);

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), ...newTask }]);
  };

  const editTask = (taskId, newTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...newTask } : task))
    );
    setEditedTask(null);
  };

  const changeStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        let prevStatus = task.finished;
        return task.id === taskId ? { ...task, finished: !prevStatus } : task;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.formContainer}>
          <h2>{titleForm}</h2>
          <TaskForm
            onAddTask={addTask}
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            onEditTask={editTask}
          />
        </div>
        <div className={styles.taskListContainer}>
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            setChangeStatus={changeStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
