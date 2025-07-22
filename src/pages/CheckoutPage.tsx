import { CheckoutForm } from "@/components/checkout-form/CheckoutForm"
import { Navbar } from "@/components/Navbar"
import { Toaster } from "@/components/ui/sonner"

export const CheckoutPage = () => {


    return (
        <>
        <Navbar/>
        <main className="flex items-center justify-center min-h-screen w-screen py-4">
            
            <CheckoutForm/>
            <Toaster position="top-center"/>
        </main>
        </>

    )
}