import { CheckoutForm } from "@/components/checkout-form/CheckoutForm"
import { Toaster } from "@/components/ui/sonner"

export const CheckoutPage = () => {


    return (
        <main className="flex items-center justify-center h-screen w-screen">
            {
                // add Navbar component
            }
            <CheckoutForm/>
            <Toaster position="top-center"/>
        </main>
    )
}