import axios from 'axios';
import getCurrentPosition from './UsersPosition';

const currentCity = async() => {
    // const api_key = process.env.OPENCAGE_REVERSE_GEO_API_KEY;

    const api_key = '176b21d1f985448aa92778b8a78b8ff3';

    try {
        const {latitude, longitude} = await getCurrentPosition();
        console.log('latitude: ', latitude, 'longitude: ', longitude)

        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

        const response = await axios.get(url);
        if(response.data.results && response.data.results.length > 0){
            
            const city =
            response.data.results[0].components._normalized_city ||
            response.data.results[0].components.town ||
            response.data.results[0].components.village ||
            response.data.results[0].components.locality ||
            'Unknown location';
            
            console.log('city res', response);
            return city;
        }
    } catch (error) {
        console.error('Error in currentCity:', error.message);
        throw error;
    }

};

export default currentCity;