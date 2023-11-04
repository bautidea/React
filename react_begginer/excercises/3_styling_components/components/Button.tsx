import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success'; // --> With this implementation we can only set this property to these values.
  onClick: () => void;
}

function Buttons({ children, color = 'primary', onClick }: Props) {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Buttons;
