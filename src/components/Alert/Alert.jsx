import clsx from 'clsx';

import styles from './Alert.module.css';

function Alert({ children, variation, outlined, elevated }) {
  return (
    <div
      className={clsx(styles[variation], {
        [styles.outlined]: outlined,
        [styles.elevated]: elevated,
      })}
    >
      {children}
    </div>
  );
}

export default Alert;
