import { useState } from 'react';

// When the user clicks a button we are going to set the name of the player
// to something else
function App() {
  const [games, setGames] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    if (games.id === 1) {
      const newPlayer = {
        ...games,
        player: {
          ...games.player,
          name: 'Bob',
        },
      };

      setGames(newPlayer);
    }
  };

  return (
    <div>
      {
        <p>
          {' '}
          {games.id} {games.player.name}
        </p>
      }
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
