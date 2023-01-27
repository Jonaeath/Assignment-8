import React from 'react';
import './Players.css'

const Players = (props) => {
    const {imge,name,Description,age,time} = props.player; 

    return (
        <div className='player-contain'>
             <img src={imge} alt='' />
            <div>
            <p>Nmae: {name}</p>
            <p>About:{Description}</p>
            <p>Age:{age}</p>
            <p>Time:{time}</p>
            </div>
            
                <button onClick={() => props.handaleAddtogame(props.player)} className='btn-list'>
                    <p className='btn-text'>Add to List</p>
                </button>
            
        </div>
    );
};

export default Players;