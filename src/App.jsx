import { useState } from 'react';

import './App.css';

import Box from './components/Box';

const App = () => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);

  const handleClick = (i) => {
    if (box[i] || calculateWinner(box)) {
      return;
    }
    const nextBox = box.slice();

    if (nextPlayer) {
      nextBox[i] = 'X';
    } else {
      nextBox[i] = 'O';
    }

    setBox(nextBox);
    setNextPlayer(!nextPlayer);
  };

  const winner = calculateWinner(box);
  let status;
  if (winner) {
    status = 'Ganhador : ' + winner;
  } else {
    status = 'Próximo jogador: ' + (nextPlayer ? 'X' : 'O');
  }

  function calculateWinner(box) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
    return null;
  }

  return (
    <main>
      <div className="container">
        <div className="status">
          <h1>{status} </h1>
        </div>
        <div className="container-box ">
          <Box value={box[0]} clickBox={() => handleClick(0)} />
          <Box value={box[1]} clickBox={() => handleClick(1)} />
          <Box value={box[2]} clickBox={() => handleClick(2)} />
          <Box value={box[3]} clickBox={() => handleClick(3)} />
          <Box value={box[4]} clickBox={() => handleClick(4)} />
          <Box value={box[5]} clickBox={() => handleClick(5)} />
          <Box value={box[6]} clickBox={() => handleClick(6)} />
          <Box value={box[7]} clickBox={() => handleClick(7)} />
          <Box value={box[8]} clickBox={() => handleClick(8)} />
        </div>
      </div>
    </main>
  );
};

export default App;
