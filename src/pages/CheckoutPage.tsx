import { CheckoutForm } from "@/components/checkout-form/CheckoutForm";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export const CheckoutPage = () => {
  return (
    <>
      <main className="w-full max-w-screen flex flex-col min-h-screen h-full">
        <Navbar />
        <div className="w-full grow py-5 h-max flex items-center justify-center">
          <CheckoutForm />
        <Toaster position="top-center" />
        </div>
      </main>
    </>
  );
};
