import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks, onRemove }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TaskList;
