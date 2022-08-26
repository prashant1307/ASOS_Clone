import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { UseUserAuth } from "../Context/AuthContext"

export const Logout=()=>{
    const {logOut}=UseUserAuth()
    const navigate=useNavigate()
    const handleLogout=async()=>{
        try {
            await logOut()
            // navigate("/login")
        } catch (error) {
            console.log(error.message)
        }
       
    }
    return (
        <Button onClick={handleLogout}>Logout</Button>
    )
}