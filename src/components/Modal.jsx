import { useState } from 'react';

function Modal({ title, children }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={toggle}>Toggle</button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Modal;
