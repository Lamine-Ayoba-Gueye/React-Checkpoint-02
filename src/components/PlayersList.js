import React from 'react';
import players from '../players';
import Player from './Player';
// import Player from './components/Player';
// import players from './players';

const PlayersList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
