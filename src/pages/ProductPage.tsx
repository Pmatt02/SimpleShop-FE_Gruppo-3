import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { ProductUI } from "@/components/product";


export function ProductPage(){

    const {id} = useParams()
    const [data, setData] = useState<Product>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const json = await res.json();
                setData(json);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    
    return(
        <>
            <div className="mx-3">
                <ProductUI product={data}/>
            </div>
           
        </>
    )
}