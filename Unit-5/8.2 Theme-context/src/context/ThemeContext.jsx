import { createContext, useState }  from 'react';
import { styles } from '../styles'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [theme, settheme] = useState(styles.light);

    const handleTheme = () =>{
        settheme(theme=== styles.light ? styles.dark : styles.light)
    }
    return (
        <ThemeContext.Provider value={{theme, handleTheme}}> {children} </ThemeContext.Provider>
    )
}