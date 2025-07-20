import { CheckoutPage } from "@/pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";


export const AppRoutes = () =>{


    return(
        <>
        <Routes>
            <Route path="/" element={<h1>Per home page</h1>}/>
            <Route path="/category/:category" element={<h1>Prodotti filtrati per categoria</h1>}/>
            <Route path="/product/:id" element={<h1>Dettaglio prodotto</h1>}/>
            <Route path="/cart" element={<h1>carrello</h1>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
        </Routes>
        </>
    )
} 



