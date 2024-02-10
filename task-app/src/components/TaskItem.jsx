import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, onDelete, onEdit, onChangeStatus }) => {
  const handleToggleStatus = () => {
    onChangeStatus(task.id);
  };

  const textStatus = task.finished ? "Terminado" : "Sin terminar";

  return (
    <div className={styles.taskItem}>
      <div className={styles.sectionTitle}>
        <strong>Título: </strong>
        <p>{task.text}</p>
      </div>
      <div className={styles.sectionDesc}>
        <strong>Descripción: </strong>
        <p>{task.description}</p>
      </div>
      <div className={styles.sectionDesc}>
        <strong>Estado: </strong>
        <p>{textStatus}</p>
      </div>
      <div>
        <button onClick={handleToggleStatus} className={styles.toggleButton}>
          Cambiar Estado
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className={styles.deleteButton}
        >
          Eliminar
        </button>
        <button onClick={() => onEdit(task)} className={styles.editButton}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
