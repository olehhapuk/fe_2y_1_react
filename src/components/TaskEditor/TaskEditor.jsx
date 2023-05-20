import { useState } from 'react';

import styles from './TaskEditor.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function TaskEditor({ onCreate }) {
  const [text, setText] = useState({
    value: '',
    error: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (text.value === '') {
      setText({
        // value: text.value,
        ...text,
        error: 'Будь ласка введіть текст',
      });
    } else {
      onCreate(text.value);

      setText({
        value: '',
        error: '',
      });
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        placeholder="Enter todo text"
        value={text.value}
        onChange={(e) => setText({ ...text, value: e.target.value })}
        error={text.error}
        isTextArea
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskEditor;
