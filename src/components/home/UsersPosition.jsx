export default function getCurrentPosition() {

    return new Promise((resolve, reject) => {
        if(!navigator.geolocation){
            reject(new Error('Geolocation is not supported by your browser.'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({latitude, longitude});
            },
            (error)=>{
                console.error('Error while getting location', error.message);
            }
        );
    });
       
};

getCurrentPosition();