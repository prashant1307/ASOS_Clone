import { Navigate } from "react-router-dom"
import { UseUserAuth } from "../Context/AuthContext"

export const ProtectedRoute=({children})=>{
    let {user}=UseUserAuth()
    if(!user){
       return <Navigate to="/login"/>
    }
    return children
}