import { useState } from 'react';
import Like from './components/Like';

function App() {
  const [status, setStatus] = useState('inactive');

  const changeStatus = () => {
    console.log('Heart Clicked');

    if (status === 'active') setStatus('inactive');
    else setStatus('active');
  };

  return (
    <div>
      <Like status={status} onClick={changeStatus} />
    </div>
  );
}

export default App;
