import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { ProductPage } from "./ProductPage"
//import { ProtectedRoute } from "./ProtectedRoute"
import { Signup } from "./Signup"

export const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={
               <Home/>
            }/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<ProductPage/>}/>
        </Routes>
    )
}