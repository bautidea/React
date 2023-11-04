import Buttons from './components/Button';

function App() {
  return (
    <div>
      <Buttons onClick={() => console.log('Click')}>My Button</Buttons>
    </div>
  );
}

export default App;
