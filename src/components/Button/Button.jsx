import styles from './Button.module.css';

function Button({ type = 'button', children, onClick, variation = 'btn' }) {
  return (
    <button type={type} className={styles[variation]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
