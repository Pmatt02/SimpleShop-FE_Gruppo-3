import { Route, Routes } from "react-router-dom";
import { Cart } from "@/pages/cart";


export const AppRoutes = () =>{


    return(
        <>
        <Routes>
            <Route path="/" element={<h1>Per home page</h1>}/>
            <Route path="/category/:category" element={<h1>Prodotti filtrati per categoria</h1>}/>
            <Route path="/product/:id" element={<h1>Dettaglio prodotto</h1>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<h1>checkout</h1>}/>
        </Routes>
        </>
    )
} 



