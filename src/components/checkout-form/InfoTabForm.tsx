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
  PersonalInfoSchema,
} from "@/schemas/CheckoutFormSchema";

interface InfoTabFormProps {
  errors: FieldErrors<PersonalInfoSchema>;
  register: UseFormRegister<CheckoutFormSchema>;
  setTab: (value: string) => void;
}
export const InfoTabForm = ({ errors, register, setTab }: InfoTabFormProps) => {
  return (
    <TabsContent value="info">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input
              {...register("personalInfo.firstName")}
              id="firstName"
              placeholder="Enter your first name"
            />
            {errors?.firstName && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              {...register("personalInfo.lastName")}
              id="lastName"
              placeholder="Enter your last name"
            />
            {errors?.lastName && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("personalInfo.email")}
              id="email"
              placeholder="Enter your email"
            />
            {errors?.email && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              {...register("personalInfo.phoneNumber")}
              id="phoneNumber"
              placeholder="Enter your 10-digit phone number"
            />
            {errors?.phoneNumber && (
              <p className="block text-xs font-medium leading-6 text-red-400 dark:text-red-300">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setTab("shipment")}>Next</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};
