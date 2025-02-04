// import LunarApp from "./LunarApp"
import WeatherApp from "./WeatherApp"
import { useTheme } from "../theme"
// import { HomeUI } from "./HomeUI"
// import { HeroSection, Footer, LoadingSpinner } from "./HomeUI"
import MoonPhaseDisplay from "./MoonPhase";


const Home = () => {
    const {theme} = useTheme;
  return (

    <div className={`page${theme}`}>
        <div className=" bg-fixed bg-center bg-no-repeat bg-cover h-[70vh] w-full " style={{ backgroundImage: "url('/banner.jpg')" }}>
          <div className="">
            <div className="text-center  pt-20">
                <h2 className="font-comic-sans text-6xl pt-20 text-white">Under One Sky</h2>                
                <h2 className=" text-red-100 pt-10 text-center text-xl ">"The stars are the milestones of the universe, guiding us through its infinite mysteries"</h2>
            </div>
          </div>
        </div>

        <p className="text-xl text-center mt-10 font-bold"><u>Weather Forcast</u></p>
        
          
            <WeatherApp />  
          
            <MoonPhaseDisplay />
      <p className="text-xl text-center mt-10 font-bold "><u>Shop</u></p>
      <div className="flex flex-col lg:flex-row mb-10 space-between">
          <div className="lg:text-xl lg:w-1/2 p-4 ">
            <b>Unlock the Universe with Every Glance! 🔭👓</b><br /><br />
            Step into a world of wonder—whether you're gazing at the stars, exploring distant landscapes, or perfecting your vision, we’ve got the <b>telescopes, binoculars, and glasses</b> to elevate your view. See farther, clearer, and brighter than ever before.
            <br /><br />
            <b>Why settle for ordinary when the universe is waiting? ✨</b> Shop now and turn every glance into an adventure! 🌌
          </div>
        <div className="lg:w-1/2 p-4 grid grid-cols-2 gap-4">
        <a href="/shop"> <img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/celestron.jpg" />  </a>       
        <a href="/shop"> <img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/nicon_bi.jpg" />  </a>
        <a href="/shop"> <img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/glasses.jpg" />  </a>
        <a href="/shop"> <img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/pie_matrix_phoenix_60700.jpg" />  </a>
        
        </div>
      </div>
     {/* <HomeUI/> */}
          
    </div>
   
  )
}
export default Home