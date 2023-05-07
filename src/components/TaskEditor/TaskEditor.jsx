import { useState } from 'react';

import Button from '../Button/Button';
import styles from './TaskEditor.module.css';

function TaskEditor() {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(text);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter todo text"
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskEditor;
