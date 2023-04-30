import { useState } from 'react';

import styles from './Counter.module.css';

const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(0);

  function handleDecrementClick() {
    setValue(value - 1);
  }

  return (
    <div>
      <p className={styles.value}>{value}</p>
      <button className={styles.btn} onClick={handleDecrementClick}>
        -
      </button>
      <button className={styles.btn}>+</button>
    </div>
  );
};

export default Counter;
