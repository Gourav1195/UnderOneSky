import React from "react";
import WeatherApp from "./WeatherApp";
import { useTheme } from "../theme";
import MoonPhaseDisplay from "./MoonPhase";

const Home = () => {
    const { theme } = useTheme(); 

    return (
        <div className={`page${theme}`}>
            <div className="bg-fixed bg-center bg-no-repeat bg-cover h-[70vh] w-full text-center pt-20" style={{ backgroundImage: "url('/banner.jpg')" }}>
                <h2 className="font-comic-sans text-6xl pt-20 text-white">Under One Sky</h2>
                <h2 className="text-red-100 pt-10 text-center text-xl">"The stars are the milestones of the universe, guiding us through its infinite mysteries"</h2>
            </div>
            <WeatherApp />
            <MoonPhaseDisplay />

            <p className="text-2xl text-center mt-10 font-bold"><u>Shop</u></p>
            <div className="flex flex-col lg:flex-row mb-10 justify-center items-center">
                <div className="lg:text-xl lg:w-1/2 p-4">
                    <div className="p-8 max-w-3xl mx-auto mt-10 space-y-6">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                            Unlock the Universe with Every Glance! 🔭👓
                        </h1>

                        <p className="text-lg leading-relaxed text-center">
                            Step into a world of wonder—  
                            whether you're gazing at the stars,  
                            exploring distant landscapes
                            or perfecting your vision
                        </p>

                        <p className="text-lg leading-relaxed text-center">
                            We’ve got the telescopes,  
                            binoculars,  
                            and glasses
                            to elevate your view.
                        </p>

                        <p className="text-xl font-medium text-center">
                            See farther, clearer, and brighter than ever before. 🌠
                        </p>

                        <p className="text-lg text-center italic">
                            Why settle for ordinary when the universe is waiting? ✨
                        </p>

                        <div className="text-center mt-6">
                            <a href="/shop" className="bg-gradient-to-r from-gray-600 to-gray-900 text-white font-semibold py-3 px-6 rounded-full shadow hover:shadow-lg transition duration-300">
                                🌌 Shop Now & Turn Every Glance Into an Adventure! 🌌
                            </a>
                        </div>

                        <div className="mt-8 text-center text-sm">
                            <p>Explore. Discover. Witness the cosmos like never before.</p>
                            <p>Your journey to the stars starts here. 🚀</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 p-4 grid grid-cols-2 gap-4">
                    <a href="/shop"><img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/celestron.jpg" alt="telescope" /></a>
                    <a href="/shop"><img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/nicon_bi.jpg" alt="telescope" /></a>
                    <a href="/shop"><img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/glasses.jpg" alt="telescope" /></a>
                    <a href="/shop"><img className="w-64 h-64 rounded-lg hover:scale-105 transition-transform duration-300" src="/shop_items/pie_matrix_phoenix_60700.jpg" alt="telescope" /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
