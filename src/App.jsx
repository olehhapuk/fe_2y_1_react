import Modal from './components/Modal';
import Timer from './components/Timer';
import InputHandler from './components/InputHandler';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <Modal title="Timer">
        <Timer />
      </Modal>
      <Modal title="Input Handler">
        <InputHandler />
      </Modal>
      <Modal title="Register Form">
        <RegisterForm />
      </Modal>
    </div>
  );
}

export default App;
