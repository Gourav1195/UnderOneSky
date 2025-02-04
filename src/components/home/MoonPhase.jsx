import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoonPhaseDisplay = () => {
    const [lunarData, setLunarData] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_LUNAR_API_KEY; // Replace with your actual API key
    const latitude = '28.7041';
    const longitude = '77.1025';

    axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${latitude}&long=${longitude}`)
      .then(response => {
        const phase = response.data.moon_phase;
        setLunarData(response.data);    
    })
      .catch(error => {
        console.error('Error fetching moon phase:', error);
      });
  }, []);

  const getMoonEmoji = (phase) => {
    switch (phase) {
      case 'New Moon': return '🌑';
      case 'Waxing Crescent': return '🌒';
      case 'First Quarter': return '🌓';
      case 'Waxing Gibbous': return '🌔';
      case 'Full Moon': return '🌕';
      case 'Waning Gibbous': return '🌖';
      case 'Last Quarter': return '🌗';
      case 'Waning Crescent': return '🌘';
      default: return '🌑';
    }
  };

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center p-6  shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]
">
    
    <div className="mt-4 text-left">
        <h1 className="text-2xl font-bold mb-4">🌙 Current Moon Status</h1>
        <p className="text-xl mt-2">{lunarData.moon_phase}</p>
      <p><strong>🌅 Moonrise:</strong> {lunarData.moonrise}</p>
      <p><strong>🌄 Moonset:</strong> {lunarData.moons}</p>
      {/* <p><strong>🌔 Illumination:</strong> {lunarData.moon_illumination}%</p> */}
      {/* <p><strong>📅 Moon Age:</strong> {lunarData.moon_age} days</p> */}
      <p><strong>🌍 Distance from Earth:</strong> {lunarData.moon_distance} km</p>
      <p><strong>🏔️ Above Horizon:</strong> {lunarData.is_moon_up ? 'Yes' : 'No'}</p>
    </div>
    <div className=''>
            <p className="text-8xl">{getMoonEmoji(lunarData.moon_phase)}</p>

    </div>

  </div>
  );
};

export default MoonPhaseDisplay;
