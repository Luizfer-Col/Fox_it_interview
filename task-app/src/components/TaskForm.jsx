import React, { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ onAddTask, editedTask, onEditTask, setEditedTask }) => {
  const [formData, setFormData] = useState({
    newTask: "",
    newDescription: "",
    newFinished: false,
  });
  const [requiredFieldsEmpty, setRequiredFieldsEmpty] = useState(false);

  useEffect(() => {
    if (editedTask) {
      setFormData({
        newTask: editedTask.text,
        newDescription: editedTask.description,
        newFinished: editedTask.finished,
      });
      setRequiredFieldsEmpty(false);
    }
  }, [editedTask]);

  const handleCancelEdit = () => {
    setEditedTask(null);
    setFormData({
      newTask: "",
      newDescription: "",
      newFinished: false,
    });
    setRequiredFieldsEmpty(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setRequiredFieldsEmpty(false);
  };

  const handleAddOrEditTask = () => {
    const { newTask, newDescription } = formData;

    if (newTask.trim() !== "" && newDescription.trim() !== "") {
      const taskData = {
        id: editedTask ? editedTask.id : Date.now(),
        text: newTask,
        description: newDescription,
        finished: formData.newFinished,
      };

      editedTask ? onEditTask(editedTask.id, taskData) : onAddTask(taskData);

      setFormData({
        newTask: "",
        newDescription: "",
        newFinished: false,
      });

      setEditedTask(null);
    } else {
      setRequiredFieldsEmpty(true);
    }
  };

  return (
    <div className={styles.taskForm}>
      <input
        required
        type="text"
        placeholder="Título"
        name="newTask"
        value={formData.newTask}
        onChange={handleInputChange}
        className={`${styles.inputField} ${
          requiredFieldsEmpty && !formData.newTask.trim()
            ? styles.requiredField
            : ""
        }`}
      />
      <textarea
        required
        type="text"
        placeholder="Descripción"
        name="newDescription"
        value={formData.newDescription}
        onChange={handleInputChange}
        className={`${styles.inputField} ${
          requiredFieldsEmpty && !formData.newDescription.trim()
            ? styles.requiredField
            : ""
        }`}
      />
      {requiredFieldsEmpty && (
        <strong className={styles.textWarning}>
          Agrega los campos requeridos
        </strong>
      )}
      <div className={styles.buttonsContainer}>
        {editedTask && (
          <button onClick={handleCancelEdit} className={styles.cancelButton}>
            Cancelar Edición
          </button>
        )}
        <button onClick={handleAddOrEditTask} className={styles.addButton}>
          {editedTask ? "Editar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
