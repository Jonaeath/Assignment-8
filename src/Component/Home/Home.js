import './Home.css'
import img1 from '../../Image/Football.jpg'
import img2 from '../../Image/Dariabanda.jpg'
import img3 from '../../Image/Hadudu.jpg'
import img4 from '../../Image/Latim.jpg'
import img5 from '../../Image/Physical Exercise.jpg'
import img6 from '../../Image/Satchara.jpg'
import Players from '../Players/Players';
import logo from '../../Image/logo.jpg'
import PersonalInfo from '../PersonlaInfo/PersonalInfo';
import { useState } from 'react'
import ExerciseD from '../Exercise/ExerciseD'
import Addabreak from '../AddABreak/Addabreak'
import ShowBreakTime from '../ShowBreaktime/ShowBreakTime'


const Home = () => {
    const players = [
        { id: 1, imge: img1, name: 'Football', Description: 'Bowler Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '30-35', time: 50 },
        { id: 2, imge: img2, name: 'Dariabanda', Description: 'Batman Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '33-38', time: 42 },
        { id: 3, imge: img3, name: 'Ha-du-du', Description: 'Batman Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '27-31', time: 40 },
        { id: 4, imge: img4, name: 'Latim', Description: 'Batman Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '15-20', time: 50 },
        { id: 5, imge: img5, name: 'Exercise', Description: 'Batman Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '35-40', time: 60 },
        { id: 6, imge: img6, name: 'Satchara', Description: 'Bowler Bangladesh holds the record for most consecutive losses in Tests (21, between 2000 and 2002) and ODIs (23, between 2001 and 2004)', age: '15-20', time: 40 },

    ]

    const breakTimes = [
        {id:1, name: 30},{id:2, name: 35},{id:3, name: 40},{id:4, name: 50},{id:5, name: 55},
    ]

    const [exercise, setExercise] = useState([]);

    const handaleAddtogame = (player) => {
        const newExercise = [...exercise, player];
        setExercise(newExercise);
    }
    
    const [plbreakTime , setplBreakTime] = useState([]);

    const handalBreaktime = (breakTime) =>{
        const newbreaktime = [...plbreakTime,breakTime]
        setplBreakTime(newbreaktime);
    }
   
    return (
        <div className='myhome'>
            <div>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h1>BANGLADESHI-TRADITIONAL-SPORTS </h1>
                </div>
                <div className='header-two'>
                    <h2>Select Todays Sports</h2>
                </div>
                <div className='home-containe' >
                    {
                        players.map(player => <Players
                            key={player}
                            player={player}
                            handaleAddtogame={handaleAddtogame}
                        ></Players>)
                    }

                </div>
            </div>
            <div className='personal'>
                <div>
                    <PersonalInfo></PersonalInfo>
                    <h4>Add a break</h4>
                    <div className='break-Time'>
                    {
                        breakTimes.map(breakTime => <Addabreak
                        key = {breakTime}
                        breakTime = {breakTime}
                        handalBreaktime = {handalBreaktime }
                        >
                        </Addabreak>)
                    }

                    </div>
                </div>
                <div>
                    <ExerciseD
                    exercise = {exercise}
                    ></ExerciseD>
                <ShowBreakTime
                plbreakTime = {plbreakTime}
                >
                </ShowBreakTime>  
                </div>
            </div>

        </div>
    );
};

export default Home;