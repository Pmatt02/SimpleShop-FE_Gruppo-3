import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";

export const AppRoutes = () =>{


    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/category/:category" element={<h1>Prodotti filtrati per categoria</h1>}/>
            <Route path="/product/:id" element={<h1>Dettaglio prodotto</h1>}/>
            <Route path="/cart" element={<h1>carrello</h1>}/>
            <Route path="/checkout" element={<h1>checkout</h1>}/>
        </Routes>
        </>
    )
} 



