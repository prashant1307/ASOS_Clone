import { Link } from "react-router-dom"
import { Body } from "../Components/Body"
import { Footer } from "../Components/Footer"
//import N from "../Components/N"
import { Navbar } from "../Components/Navbar"

export const Home=()=>{
    return (
        <>
    
        {/* <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}
        <Navbar/>
        
        <Body/>
        <Footer/>
        </>
        
    )
}