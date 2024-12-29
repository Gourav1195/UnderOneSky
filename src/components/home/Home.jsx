import LunarApp from "./LunarApp"
import WeatherApp from "./WeatherApp"
import "./home.css"
import { useTheme } from "../theme"

const Home = () => {
    const {theme} = useTheme;
  return (

    <div className={`page${theme}`}>
            {/* <img className="banner_image" src="/banner.jpg" alt="night sky"  /> */}
      <div id="top" class="banner_image bg">
        <div class="follow_container">
            <div class="col-md-6 col-md-offset-3">
                <h2 class="top-title">Under One Sky

                </h2>
                <h2 class="em_hide second-title">"The stars are the milestones of the universe, guiding us through its infinite mysteries"</h2>
                
            </div>
        </div>
      </div>
      
<div>
        <WeatherApp />
        <LunarApp /></div>
    </div>
  )
}

export default Home