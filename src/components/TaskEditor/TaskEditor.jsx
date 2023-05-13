import { useState } from 'react';

import Button from '../Button/Button';
import styles from './TaskEditor.module.css';

function TaskEditor({ onCreate }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (text === '') {
      setError('Будь ласка введіть текст');
    } else {
      setError('');
      onCreate(text);
      setText('');
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter todo text"
        className={error ? styles.error : styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p className={styles['form-error']}>{error}</p>}

      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskEditor;
