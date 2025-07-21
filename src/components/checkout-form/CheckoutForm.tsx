import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  checkoutFormSchema,
  type CheckoutFormSchema,
  type PaymentSchema,
  type PersonalInfoSchema,
  type ShippingAddressSchema,
} from "@/schemas/CheckoutFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldErrors } from "react-hook-form";
import { useState } from "react";
import { InfoTabForm } from "./InfoTabForm";
import { ShipmentTabForm } from "./ShipmentTabForm";
import { PaymentTabForm } from "./PaymentTabForm";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { showCheckoutToast } from "@/utils/checkoutToast";

export const CheckoutForm = () => {
  const [tab, setTab] = useState("info");
  const navigate = useNavigate();

  const {
    control,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: CheckoutFormSchema) => {
    // clear cart in localStorage and redirect to "/"
    const promise = () =>
      new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));

    const showToast = async () => {
      toast.loading("Placing your order...");
      try {
        await promise();
        toast.dismiss();
        showCheckoutToast(() => navigate("/"));
      } catch (err) {
        toast.dismiss(); // dismiss loading
        toast.error("Something went wrong. Please try again.");
        setError("root", {
          type: "manual",
          message: "Checkout failed",
        });
      }
    };
    await showToast();
    console.log(data);
  };
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="w-full">
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="shipment">Shipment</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>

          {/* Info Tab */}
          <InfoTabForm
            errors={errors.personalInfo as FieldErrors<PersonalInfoSchema>}
            register={register}
            setTab={setTab}
          />

          {/* Shipment Tab */}
          <ShipmentTabForm
            errors={
              errors.shippingAddress as FieldErrors<ShippingAddressSchema>
            }
            register={register}
            setTab={setTab}
          />

          {/* Payment Tab */}
          <PaymentTabForm
            errors={errors.payment as FieldErrors<PaymentSchema>}
            register={register}
            isSubmitting={isSubmitting || isSubmitSuccessful}
            control={control}
          />
        </Tabs>
      </form>
    </div>
  );
};
