import React, {useState, useEffect} from 'react';
import axios from 'axios';
import currentCity from './CurrentCity';


const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Delhi');
    const [updatedCity, setUpdatedCity] = useState(false);

    const categorizedVisibility = (visibility) => {
      let VisibilityCondition = visibility > 10000 ? 'Exellent Visibility' : visibility > 6000 ? 'Good Visibility' : visibility > 3000 ? 'Moderate Visibility' : visibility > 1000 ? 'Poor Visibility' :'Very Poor Visibility';
      return VisibilityCondition;
    }
    
    const convertUnixToTime = (unixTime) => {
      const date = new Date(unixTime * 1000);
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istDate = new Date(date.getTime()+ istOffset);
      return istDate.toLocaleTimeString("en-IN", {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
      })
    };

    const updatedCityFun =async() =>{
      try{        
        if(!updatedCity){
          const result = await currentCity();
          setCity(result);
          // console.log('updated city', result)
          setUpdatedCity(true);
        }
      } catch (error){
        console.error("error fetching city", error.message);
      }
    };
    
    useEffect(() => {
      updatedCityFun();
        const fetchWeather = async() => {
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY ;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            try{
                const response = await axios.get(url);
                // console.log('response',response.data);
                setWeather(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchWeather();        
        
    }, [city])

  return (
    <>
      <div className='container'>
          <h3 className="heading">Weather Forcast</h3>
          <input  
            type='text'
            placeholder=' Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
      
      </div> 
        { weather ? (
          <>
            <div className='container'>
          
                <h4>{weather.name}</h4>
                <p>{weather?.weather[0]?.description}</p>
                <p>{weather?.main?.temp}</p>
                
            </div>
            <div>
            <p>Visibility: {weather.visibility} meters ({categorizedVisibility(weather.visibility)})
            </p>
            <p>Sunrise: {convertUnixToTime(weather.sys.sunrise)}</p>
            <p>Sunset: {convertUnixToTime(weather.sys.sunset)}</p>
            </div>
            
            </>
            ):(
              <p>Loading...</p>
            )}
               
    </>
  )
}

export default WeatherApp;