import { CheckoutPage } from "@/pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Cart } from "@/pages/cart";
import { ProductPage } from "@/pages/ProductPage";

export const AppRoutes = () =>{


    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/category/:category" element={<h1>Prodotti filtrati per categoria</h1>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
        </>
    )
} 
