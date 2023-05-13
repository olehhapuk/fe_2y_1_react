import { useState } from 'react';
import { nanoid } from 'nanoid';

import Container from './components/Container/Container';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';

const people = ['John', 'Benedict', 'Sam'];
const newPeople = people.filter((person) => {
  return person !== 'Benedict';
  // if (person === 'Benedict') {
  //   return false;
  // } else {
  //   return true;
  // }
});
console.log(newPeople);

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <Container>
      <TaskEditor onCreate={createTask} />
      {tasks.length > 0 && <TaskList tasks={tasks} onRemove={removeTask} />}
    </Container>
  );
}

export default App;
