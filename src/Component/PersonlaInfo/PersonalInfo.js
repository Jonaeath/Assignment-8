import React from 'react';
import jon from '../../Image/Jonaeath.jpg'
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div>
            <div className='personal-info'> 
                  <img src={jon} alt="" />  
                  <p>Jonaeath Hossin</p>
                </div>
                <div className='personal-container'>
                    <div>
                        <p>65kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>5.8inch</p>
                        <p>Hight</p>
                    </div>
                    <div>
                        <p>30yrs</p>
                        <p>Age</p>
                    </div>
                </div>
        </div>
        
    );
};

export default PersonalInfo;