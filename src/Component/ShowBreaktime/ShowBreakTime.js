import React from 'react';
import './ShowBreaktime.css'

const ShowBreakTime = (props) => {
   const {plbreakTime} = props;


   let total = 0;
    for(const breakTime of plbreakTime){
        total =  breakTime.name;
    }
    return (
        <div>
            <div className='break-oftime'>
            <p>Break Time</p>
            <p>{total}</p>
            </div>
        </div>
    );
};

export default ShowBreakTime;