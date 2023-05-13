import Button from '../Button/Button';
import styles from './TaskItem.module.css';

function TaskItem({ id, text, completed, onRemove }) {
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={completed} />

      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        <Button onClick={() => onRemove(id)}>Remove</Button>
      </div>
    </li>
  );
}

export default TaskItem;
