import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = (props) => {
    return (
        <div key={props.player.id} className="col-sm-3 card center" id={`joueur${props.player.id}`}>
            <div className="card-body text-center">
                <h5 className="card-title">{props.player.name}</h5>
                <ProgressBar pv={props.player.pv} pvMax={props.player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={props.player.mana} pvMax={props.player.manaMax} faType='fa-fire-alt' barName=' : mana ' bgType='bg-primary' /> {/* Utiliser ProgressBar pour afficher la barre de mana */}
                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div >
                        <ButtonCapacity player={props.player} strength={5} manaCost={10} type="damage" /> {/* Capacité de dommage */}
                        <ButtonCapacity player={props.player} strength={10} manaCost={15} type="heal" /> {/* Capacité de soin */}
                        <ButtonCapacity player={props.player} strength={15} manaCost={20} type="restoreMana" /> {/* Capacité de restauration de mana */}
                        <ButtonCapacity player={props.player} strength={20} manaCost={25} type="damageForMana" /> {/* Capacité pour dépenser de la vie pour restaurer le mana */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PlayerCard; // Assurez-vous d'exporter le composant PlayerCard