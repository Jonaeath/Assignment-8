import React from 'react';
import './Addabreak.css'

const Addabreak = (props) => {
 
   const {name}  = props.breakTime;  
   
    return (
        <div >
         <button onClick={() => props.handalBreaktime(props.breakTime)} className='btn-class'>{name}</button>
           
        </div>
    );
};

export default Addabreak;