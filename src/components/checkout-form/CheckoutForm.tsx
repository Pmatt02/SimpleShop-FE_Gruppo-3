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

export const CheckoutForm = () => {
  const [tab, setTab] = useState("info");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: CheckoutFormSchema) => {
    // clear cart in localStorage and redirect to "/"
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
            isSubmitting={isSubmitting}
          />
        </Tabs>
      </form>
    </div>
  );
};
