import styles from './Counter.module.css';

function CounterActions({ onDecrement, onIncrement }) {
  return (
    <div>
      <button className={styles.btn} onClick={onDecrement}>
        -
      </button>
      <button className={styles.btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default CounterActions;
