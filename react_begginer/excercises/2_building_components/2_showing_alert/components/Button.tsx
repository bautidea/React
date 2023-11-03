interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success'; // --> With this implementation we can only set this property to these values.
  onClick: () => void;
}

function Buttons({ children, color = 'primary', onClick }: Props) {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
