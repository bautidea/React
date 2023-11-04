import styles from './Like.module.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';

interface Props {
  status: string;
  onClick: () => void;
}

function Like({ status, onClick }: Props) {
  return (
    <div>
      <BsFillSuitHeartFill
        className={[styles.like, styles['like-' + status]].join(' ')}
        onClick={onClick}
      />
    </div>
  );
}

export default Like;
