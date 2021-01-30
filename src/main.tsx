import './styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Layout,
  LayoutBoard,
  LayoutPlayers,
  LayoutMetrics,
} from './components/Layout';
import { Board } from './components/Board';
import { Metrics } from './components/Metrics';
import { Players } from './components/Players';
import { Player } from './entities/Player';

const App = () => {
  const [players] = useState<Player[]>([
    new Player({ name: 'Kevin', active: true, position: 1 }),
    new Player({ name: 'Lincoln', position: 15 }),
  ]);
  const [player] = useState<Player>(players[0]);
  const [dice, setDice] = useState<number>(6);
  return (
    <Layout>
      <LayoutBoard>
        <Board
          title="Boardgame"
          dice={dice}
          onRoll={(number: number) => setDice(number)}
          players={players}
        />
      </LayoutBoard>
      <LayoutMetrics>
        <Metrics dice={dice} player={player} />
      </LayoutMetrics>
      <LayoutPlayers>
        <Players players={players} />
      </LayoutPlayers>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
