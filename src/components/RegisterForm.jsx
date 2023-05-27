import { useState, useEffect } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('first render');
  }, []);

  useEffect(() => {
    console.log('render');
  });

  useEffect(() => {
    console.log('username', username);
  }, [username]);

  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="reset">Register</button>
    </form>
  );
}

export default RegisterForm;
