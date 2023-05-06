import Counter from './components/Counter/Counter';
import Switch from './components/Switch';

function App() {
  return (
    <div>
      <Switch>
        <Counter initialValue={0} step={1} />
      </Switch>
    </div>
  );
}

export default App;
