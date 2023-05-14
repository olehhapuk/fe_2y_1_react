import styles from './Input.module.css';

function Input({ error, value, onChange, placeholder, isTextArea }) {
  return (
    <div>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          className={error ? styles.error : styles.input}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={error ? styles.error : styles.input}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className={styles['form-error']}>{error}</p>}
    </div>
  );
}

export default Input;
