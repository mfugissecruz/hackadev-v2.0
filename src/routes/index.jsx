import { Routes, Route } from "react-router-dom"
import { ProductDetail } from "../pages/Product"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import { Checkout } from "../pages/Checkout"

export const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route exact path="/logout" element={<Signup />} />
            <Route element={ <Home /> } path="/" />
            <Route path="*" element={<Signin />} />
            <Route element={ <ProductDetail /> } path="/products/:slug/s" />
            <Route element={ <Cart /> } path="/cart" />
            <Route element={ <Checkout /> } path="/checkout" />
        </Routes>
    )
}