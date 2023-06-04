function Modal({ img, onClose }) {
  return (
    <div>
      <p>{img}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
