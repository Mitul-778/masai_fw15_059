import { Link } from "react-router-dom"

export const Home = () =>{
    return(
            <div> 
                <h1>Welcome home !</h1>
                <button> <Link to="/register">Register</Link></button>
                <button> <Link to="/login">Login</Link></button>
                 </div>
    )
}