import type { FieldErrors, UseFormRegister } from "react-hook-form";
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
  ShippingAddressSchema,
} from "@/schemas/CheckoutFormSchema";

interface ShippingAddressTabFormProps {
  errors: FieldErrors<ShippingAddressSchema>;
  register: UseFormRegister<CheckoutFormSchema>;
  setTab: (value: string) => void;
}

export const ShipmentTabForm = ({
  errors,
  register,
  setTab,
}: ShippingAddressTabFormProps) => {
  return (
    <TabsContent value="shipment">
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid gap-1.5">
            <Label htmlFor="address1">Address 1</Label>
            <Input
              {...register("shippingAddress.address1")}
              id="address1"
              placeholder="Enter your address"
            />
            {errors?.address1 && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.address1.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="address2">Address 2 (optional)</Label>
            <Input
              {...register("shippingAddress.address2")}
              id="address2"
              placeholder="Enter your address line 2"
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="city">City</Label>
            <Input
              {...register("shippingAddress.city")}
              id="city"
              placeholder="Enter your city"
            />
            {errors?.city && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="state">State</Label>
            <Input
              {...register("shippingAddress.state")}
              id="state"
              placeholder="Enter your state"
            />
            {errors?.state && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              {...register("shippingAddress.zip")}
              id="zip"
              placeholder="Enter your ZIP code"
            />
            {errors?.zip && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.zip.message}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              {...register("shippingAddress.country")}
              id="country"
              placeholder="Enter your country"
            />
            {errors?.country && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.country.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setTab("payment")}>Next</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
