import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentCity from './CurrentCity';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Delhi');
    const [loading, setLoading] = useState(false);

    const categorizedVisibility = (visibility) => {
        let VisibilityCondition = visibility > 10000 ? 'Excellent Visibility' : visibility > 6000 ? 'Good Visibility' : visibility > 3000 ? 'Moderate Visibility' : visibility > 1000 ? 'Poor Visibility' : 'Very Poor Visibility';
        return VisibilityCondition;
    }
    const iconCode = weather?.weather[0]?.icon;
    const iconUrl = weather ? `https://openweathermap.org/img/wn/${iconCode}@4x.png` : null;

    const convertUnixToTime = (unixTime) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString("en-IN", {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata'
        });
    };

    useEffect(() => {
        const fetchCity = async () => {
            const result = await CurrentCity();
            setCity(result);
        };
        fetchCity(); 
    }, []); 

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            try {
                const response = await axios.get(url);
                setWeather(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            } 
        }
        fetchWeather();
    }, [city]); 

    return (
        <>
            <div className='text-center mt-4'>
                <h1 className="mb-4 text-2xl font-bold mb-4">🌤️ Current Weather Status</h1>
                <input
                    className='px-1 border-2 rounded-md text-gray-900 border-blue-600 text-center'
                    type='text'
                    placeholder=' Enter City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            {loading && <p>Loading...</p>}
            {weather && (
                <div className='flex lg:flex-row flex-col items-center justify-center'>
                    <div className='lg:w-auto'>
                        <h4>{weather.name}</h4>
                        <p>{weather?.weather[0]?.description}</p>
                        <p>{weather?.main?.temp}°</p>
                        <p>Visibility: {weather.visibility} meters ({categorizedVisibility(weather.visibility)})</p>
                        <p>Sunrise: {convertUnixToTime(weather.sys.sunrise)}</p>
                        <p>Sunset: {convertUnixToTime(weather.sys.sunset)}</p>
                    </div>
                    <div className='lg:w-auto lg:ml-16'>
                        <img src={iconUrl} alt='weather icon' />
                    </div>
                </div>
            )}
        </>
    )
}

export default WeatherApp;
