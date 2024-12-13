import LunarApp from "./LunarApp"
import WeatherApp from "./WeatherApp"
import {
  // NasaImg,
  UnsplashImage
  } from "./NasaImg"
import { useTheme } from "../theme"

const Home = () => {
    const {theme} = useTheme;
  return (
    <div className={`page${theme}`}>
        <WeatherApp />
        <LunarApp />
        <UnsplashImage />
        {/* <img src="https://source.unsplash.com/1400x900/?stars" alt="night sky" /> */}
    </div>
  )
}

export default Home