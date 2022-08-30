import { Routes, Route } from "react-router-dom"
import Product from "../pages/Product"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
            <Route element={ <Home /> } path="/home" />
            <Route element={ <Product /> } path="/product" />
            <Route element={ <Cart /> } path="/cart" />
        </Routes>
    )
}