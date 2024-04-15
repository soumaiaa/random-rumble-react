import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack, increaseMana, decreaseMana } from '../features/fight/fightSlice';

const ButtonCapacity = (props) => {
    const dispatch = useDispatch();

    const combat = () => {
        if (props.type === "damage") {
            // Vérifier si le joueur a suffisamment de mana pour utiliser la capacité de dommage
            if (props.player.mana >= props.manaCost) {
                dispatch(decreaseMana({ playerId: props.player.id, amount: props.manaCost }));
                dispatch(hitMonster({ strength: props.strength }));
            } else {
                console.log('Mana insuffisante pour utiliser cette capacité.');
            }
        } else if (props.type === "heal") {
            // Vérifier si le joueur a suffisamment de mana pour utiliser la capacité de soin
            if (props.player.mana >= props.manaCost) {
                dispatch(decreaseMana({ playerId: props.player.id, amount: props.manaCost }));
                dispatch(hitBack({ playerId: props.player.id }));
            } else {
                console.log('Mana insuffisante pour utiliser cette capacité.');
            }
        } else if (props.type === "restoreMana") {
            // Capacité pour restaurer le mana
            dispatch(increaseMana({ playerId: props.player.id, amount: 10 }));
        } else if (props.type === "damageForMana") {
            // Capacité pour dépenser de la vie pour restaurer le mana
            dispatch(decreaseMana({ playerId: props.player.id, amount: 5 }));
            dispatch(increaseMana({ playerId: props.player.id, amount: 10 }));
        }
    }

    return (
        <button onClick={combat} className='btn btn-danger'>{props.player.name} - Capacité {props.strength}</button>
    )
}

export default ButtonCapacity;

