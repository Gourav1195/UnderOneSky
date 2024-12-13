import { createContext, useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Cookies from 'js-cookie'
const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

//wrap the whole app inside the ThemeProvider
export const ThemeProvider = ({children}) => {
    const[isDarkMode, setIsDarkMode] = useState(() =>{
        
        const savedMode = Cookies.get("isDarkMode");
        return savedMode === "true";
    });

    const toggleTheme = () => {
        // setIsDarkMode((prevState) => !prevState);
        setIsDarkMode((prevState) => {
            const newMode = !prevState;
            Cookies.set("isDarkMode", newMode);
            return newMode;
        });
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        Cookies.set("isDarkMode", isDarkMode, {expires: 365});
    },[isDarkMode]);
    //ThemeProvider will provide the all state to the childern
    //send props via value
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    // Add PropTypes validation
   
}
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}