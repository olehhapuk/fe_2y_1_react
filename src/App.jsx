import { useState } from 'react';

import Container from './components/Container/Container';
import TaskList from './components/TaskList/TaskList';
import TaskEditor from './components/TaskEditor/TaskEditor';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 'id-1',
      text: 'Купити лимони',
      completed: false,
    },
    {
      id: 'id-2',
      text: 'Купити мандарини',
      completed: false,
    },
  ]);

  return (
    <Container>
      <TaskEditor />
      <TaskList tasks={tasks} />
    </Container>
  );
}

export default App;
