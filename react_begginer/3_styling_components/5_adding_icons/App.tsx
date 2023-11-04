// To use icons we need first to install react-icons, then we can go to the page
// https://react-icons.github.io/react-icons/
// and we can search the icon we want to use.
// React-icon is essentially a package of different icon libraries.

// To use it we select the one we want from the page and paste it between curly braces
// and import it.
// Because this icon starts with BS we need to go to the bs folder.
import { BsFillBadge3DFill } from 'react-icons/bs';

function App() {
  return (
    <div>
      {/*  
      And we use it just as a regular React component.
    */}
      <BsFillBadge3DFill color="red" size="40" />
    </div>
  );
}

export default App;
