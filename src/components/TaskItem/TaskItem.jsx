import Button from '../Button/Button';
import styles from './TaskItem.module.css';

function TaskItem({ id, text, completed }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        <Button>Remove</Button>
      </div>
    </li>
  );
}

export default TaskItem;
