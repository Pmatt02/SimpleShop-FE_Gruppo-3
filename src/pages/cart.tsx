import { CartCard } from "@/components/CartCard";
import type { CartItem } from "@/types/cart";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Resoconto } from "@/components/Resoconto";

export function Cart() {
  const { cart } = useCart();
  const cartData = localStorage.getItem("cart");
  const [products, setProducts] = useState<CartItem[]>(
    cartData ? JSON.parse(cartData) : []
  );

  const emptyOrNot = (products: CartItem[], option: "card" | "table") => {
    if (products.length) {
      if (option === "card") {
        return products.map((p, index) => <CartCard key={index} product={p} />);
      } else {
        return (
          <div className="w-full sm:max-w-sm sm:mx-auto  sticky top-[20px]">
            <Resoconto products={cart} />
          </div>
        );
      }
    } else {
      if (option === "card") {
        return (
          <div className="w-full flex justify-center-safe">
            <div className="flex-wrap p-20">
              <h2 className="font-extrabold text-3xl text-red-900">
                Il carrello è vuoto
              </h2>
              <p>
                Vai alla{" "}
                <Link to={"/"} className="underline decoration-sky-500">
                  Home
                </Link>{" "}
                e vedi i nostri prodotti
              </p>
            </div>
          </div>
        );
      }
    }
  };
  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6">
      <div className="w-full lg:w-2/3 space-y-4 top-[20px] ">
        {emptyOrNot(products, "card")}
      </div>
      {emptyOrNot(products, "table")}
    </div>
  );
}
