import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const NasaImg = () => {
    const [imageUrl, setImageUrl] = useState(null);

    const api_key = process.env.REACT_APP_NASA_API_KEY ;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
    
    useEffect (() =>{

        const fetchImage= async()=>{
            try {
                const response = await axios.get(url);
                setImageUrl(response.data.url);
                
                console.log('api resoponse',response);
                console.log('image url',response);
                
            } catch (error) {
                console.error('error Nasa Img', error.message);
            }
        };
        fetchImage();
    },[])
    

  return (
    <div>
    {imageUrl?
    (    
    <img src={imageUrl} />
   ):
    ( <p>loading</p>)}
    </div>
  )
}

export const UnsplashImage = ()=> {
    const[image, setImage] = useState([]);
    const accessKey = 'XJBKhKqppwBAFUhgSTWMS9Sx-oZUFXHvcYp6-cgancQ'

    useEffect(() => {
        const fetchImage = async() =>{
            try{
                const response = await axios.get('https://api.unsplash.com/search/photos?',
                // const response = await axios.get('https://api.unsplash.com/photos?query=star',
                {               
                    params: { query: "night sky", orientation: "landscape" },     
                    headers: {                                                
                        Authorization: `Client-ID ${accessKey}`,
                    },
                });
                // setImage(response.data[0].urls.full);

                console.log('response',response);
                setImage(response.data.results[0].urls.full);
            }
            catch(error){
                console.error(error.message);
            }
        }
        
        fetchImage();
    },[])
    return(
        <div>
            {image?(
                <img src={image} alt="Night Sky" style={{ width: "100%", height: "auto" }}/> 

            ):(
                <p>Image Loading...</p>
            )}
        </div>
    )
}