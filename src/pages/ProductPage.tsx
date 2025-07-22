import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "@/types/product";
import { ProductUI } from "@/components/product";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";


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


    const NotFound = <div className="w-full flex justify-center-safe">
            <div className="flex-wrap p-20">
              <h2 className="font-extrabold text-3xl text-black">
                Prodotto non trovato
              </h2>
              <p>
                Vai alla <Link to={"/"} className="underline decoration-sky-500">Home</Link> e vedi i nostri prodotti
              </p>
            </div>
          </div>
    
    return(
        <>
        <Navbar/>
            <div className="mx-3">
                {data?<ProductUI product={data}/>:NotFound}
                
            </div>
           
        </>
    )
}