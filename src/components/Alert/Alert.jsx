import './Alert.css';
import clsx from 'clsx';

function Alert({ children, variation, outlined, elevated }) {
  // const classes = ['alert', variation];
  // if (outlined) {
  //   classes.push('outlined');
  // }
  // if (elevated) {
  //   classes.push('elevated');
  // }
  // classes.join(' ')

  return (
    <div className={clsx('alert', variation, { outlined, elevated })}>
      {children}
    </div>
  );
}

export default Alert;
