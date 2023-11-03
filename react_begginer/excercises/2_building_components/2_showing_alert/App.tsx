import { useState } from 'react';
import Buttons from './components/Button';
import Alert from './components/Alert';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Alert status={showAlert} onClick={() => setShowAlert(false)}>
        This is an Alert
      </Alert>
      <Buttons onClick={() => setShowAlert(true)}>My Button</Buttons>
    </div>
  );
}

export default App;
