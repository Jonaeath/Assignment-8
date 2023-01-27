import React from 'react';
import './ExerciseD.css'

const ExerciseD = (props) => {
    const {exercise} = props;    
    
    let total = 0;
    for(const player of exercise){
        total = total + player.time;
    }

    return (
        <div>
            <div>
                <h3>Exercise Details</h3>
            </div>
         <div className="exerciseTime">
         <p>Exercise Time</p>   
         <p>{total}</p>  
         </div>      
        </div>
    );
};

export default ExerciseD;