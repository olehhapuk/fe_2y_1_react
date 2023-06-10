import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Container from './components/Container/Container';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';
import Input from './components/Input/Input';
import Section from './components/Section';
import Button from './components/Button/Button';
import * as tasksService from './services/tasksService';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setLoading(true);

    tasksService
      .getTasks()
      .then((data) => {
        setTasks(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function createTask(text) {
    const newTask = {
      text: text,
      completed: false,
    };

    setLoading(true);

    tasksService
      .createTask(newTask)
      .then((data) => {
        setTasks((prevTasks) => [data, ...prevTasks]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function removeTask(id) {
    setLoading(true);

    tasksService
      .deleteTask(id)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .finally(() => {
        setLoading(false);
      });
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

        <TailSpin visible={loading} />

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
