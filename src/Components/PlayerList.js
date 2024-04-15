import React from 'react';
import { useSelector } from 'react-redux';
import PlayerCard from './PlayerCard';

const PlayerList = () => {
    const players = useSelector(state => state.fight.players);

    const displayPlayers = () => {
        return players.map((player, index) => (
            <PlayerCard key={player.id} player={player} index={index} />
        ));
    };

    return (
        <div className='row'>
            {displayPlayers()}
        </div>
    );
};

export default PlayerList;