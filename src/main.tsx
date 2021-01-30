import './main.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Layout,
  LayoutBoard,
  LayoutPlayers,
  LayoutStatus,
} from './components/Layout';
import { Board } from './components/Board';
import { Status } from './components/Status';
import { Players } from './components/Players';
import { Player } from './entities/Player';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [players, setPlayers] = useState<Player[]>([
    new Player({ name: 'Kevin' }),
  ]);
  const [player, setPlayer] = useState<Player>(players[currentPlayer]);
  const [dice, setDice] = useState<number>(0);
  return (
    <Layout>
      <LayoutBoard>
        <Board onRoll={(number: number) => setDice(number)} />
      </LayoutBoard>
      <LayoutStatus>
        <Status dice={dice} player={player} />
      </LayoutStatus>
      <LayoutPlayers>
        <Players players={players} />
      </LayoutPlayers>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
