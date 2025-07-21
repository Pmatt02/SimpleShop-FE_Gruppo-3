import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TabsContent } from "../ui/tabs";
import type {
  CheckoutFormSchema,
  PaymentSchema,
} from "@/schemas/CheckoutFormSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface PaymentTabFormProps {
  errors: FieldErrors<PaymentSchema>;
  register: UseFormRegister<CheckoutFormSchema>;
  isSubmitting: boolean;
  control: Control<CheckoutFormSchema>;
}

export const PaymentTabForm = ({
  errors,
  register,
  isSubmitting,
  control,
}: PaymentTabFormProps) => {
  return (
    <TabsContent value="payment">
      <Card>
        <CardHeader>
          <CardTitle>Payment</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid gap-1.5">
            <Label htmlFor="cardName">Card Name</Label>
            <Input
              {...register("payment.cardName")}
              id="cardName"
              placeholder="Enter the name on your card"
            />
            {errors?.cardName && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.cardName.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              {...register("payment.cardNumber")}
              id="cardNumber"
              placeholder="Enter your card number"
            />
            {errors?.cardNumber && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              {...register("payment.cvv")}
              id="cvv"
              placeholder="Enter your card CVV"
            />
            {errors?.cvv && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.cvv.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="cardType">Card Type</Label>
            <Controller
              name="payment.cardType"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit">Credit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="apple">Apple Pay</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors?.cardType && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.cardType.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
