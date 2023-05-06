import styles from './Counter.module.css';

function CounterDisplay({ counterValue }) {
  return <div className={styles.value}>{counterValue}</div>;
}

export default CounterDisplay;
