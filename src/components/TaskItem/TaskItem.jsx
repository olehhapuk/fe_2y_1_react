import Button from '../Button/Button';
import styles from './TaskItem.module.css';

function TaskItem({ id, text, completed, onRemove, onUpdate }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onUpdate(id, e.target.checked)}
      />

      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        <Button onClick={() => onRemove(id)} variation="red">
          Remove
        </Button>
      </div>
    </li>
  );
}

export default TaskItem;
