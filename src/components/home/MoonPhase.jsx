import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MoonPhaseDisplay = () => {
    const [lunarData, setLunarData] = useState({});
    const [moonEmoji, setMoonEmoji] = useState('🌒');

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_LUNAR_API_KEY;
        const latitude = '28.7041'; 
        const longitude = '77.1025'; 
    
        axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${latitude}&long=${longitude}`)
          .then(response => {
            const phase = response.data.moon_phase;
            setLunarData(response.data);  
            setMoonEmoji(getMoonEmoji(phase)); 
          })
          .catch(error => {
            console.error('Error fetching moon phase:', error.response ? error.response.data : error.message);
          });
      }, []);

      const getMoonEmoji = (phase) => {
        const normalizedPhase = phase.trim().toLowerCase();  
        
        switch (normalizedPhase) {
          case 'new_moon': return '🌑';
          case 'waxing_crescent': return '🌒';
          case 'first_quarter': return '🌓';
          case 'waxing_gibbous': return '🌔';
          case 'full_moon': return '🌕';
          case 'waning_gibbous': return '🌖';
          case 'last_quarter': return '🌗';
          case 'waning_crescent': return '🌘';
          default: return '🌑'; 
        }
      };

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center p-6 shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]">
  {/* Check if lunarData exists */}
  {lunarData ? (
    <div className="mt-4 text-left">
        <h1 className="text-2xl font-bold mb-4">🌙 Current Moon Status</h1>
        <p className="text-xl mt-2">{lunarData.moon_phase || 'Loading phase...'}</p>
        <p><strong>🌅 Moonrise:</strong> {lunarData.moonrise || 'Loading...'} </p>
        <p><strong>🌄 Moonset:</strong> {lunarData.moonset || 'Loading...'} </p>
        {/* <p><strong>🌔 Illumination:</strong> {lunarData.moon_illumination}%</p> */}
        <p><strong>🌍 Distance from Earth:</strong> {lunarData.moon_distance || 'Loading...'} km</p>
        <p><strong>🏔️ Above Horizon:</strong> {lunarData.is_moon_up ? 'Yes' : 'No'}</p>
      </div>
  ) : (
    // Loading state or error
    <div className="mt-4 text-center">
      <h1 className="text-2xl font-bold mb-4">🌙 Current Moon Status</h1>
      <p className="text-xl text-gray-500">Fetching lunar data...</p>
    </div>
  )}

  <div>
    <p className="text-8xl">
      {moonEmoji}
    </p>
  </div>
</div>  
  );
};

export default MoonPhaseDisplay;
