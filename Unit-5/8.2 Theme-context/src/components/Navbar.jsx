import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Navbar = () =>{
    const { theme , handleTheme} = useContext(ThemeContext)

    return (
        <div className='navbar' style={theme}>
            <button onClick={()=>handleTheme()}>{theme.color==="black" ? "Dark" : "Light"}</button>
        </div>
    )
}