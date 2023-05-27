import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Container from './components/Container/Container';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
import Input from './components/Input/Input';
import Section from './components/Section';
import Button from './components/Button/Button';

function initTasksState() {
  const persistedTasks = localStorage.getItem('tasks');

  if (persistedTasks) {
    return JSON.parse(persistedTasks);
  } else {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(initTasksState);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function createTask(text) {
    const newTask = {
      text: text,
      completed: false,
      id: nanoid(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function updateTask(id, completed) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            completed,
          };

          return updatedTask;
        } else {
          return task;
        }
      })
    );
  }

  function reverseTasks() {
    setTasks(tasks.slice().reverse());
  }

  const filteredTasks = tasks.filter((task) => {
    return task.text.includes(query);
  });

  return (
    <Container>
      <Section title="Create todo">
        <TaskEditor onCreate={createTask} />
      </Section>

      <Section title="Search">
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Section>

      <Section title="Tasks">
        <Button onClick={reverseTasks}>Reverse</Button>

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onRemove={removeTask}
            onUpdate={updateTask}
          />
        ) : (
          <p>No tasks</p>
        )}
      </Section>
    </Container>
  );
}

export default App;
