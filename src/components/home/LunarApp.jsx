import React, {useEffect, useState} from 'react'
import getCurrentPosition from './UsersPosition';

const LunarApp = () => {
     const [lunarData, setLunarData] = useState(null);

    useEffect(() => {
      const fetchLunarData = async()=>{  
        const API_KEY = process.env.REACT_APP_LUNAR_API_KEY;
        
        try{
            const {latitude, longitude} = await getCurrentPosition();
            const url = `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${latitude}&long=${longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            setLunarData(data);
            // console.log(data);
        }
        catch(error){
            console.error('Error while fetching lunar data', error);
        }
    };
    fetchLunarData();

},[])

        return (
        <div>
            {lunarData?(
                <div className='container'>
                    <h4>Moon Phase: {lunarData.moon_phase}</h4>
                    {/* <p>moonrise: {lunarData.moonrise}</p> */}
                    {/* <p>moonset: {lunarData.moonset}</p> */}
                </div>
            ):
            (
                <p>Loading...</p>
            )}
        </div>
    
    
    )};

export default LunarApp