import { CheckoutForm } from "@/components/checkout-form/CheckoutForm"
import { Toaster } from "@/components/ui/sonner"

export const CheckoutPage = () => {


    return (
        <main className="flex items-center justify-center min-h-screen w-screen py-4">
            {
                // add Navbar component
            }
            <CheckoutForm/>
            <Toaster position="top-center"/>
        </main>
    )
}