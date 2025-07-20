import { z } from "zod";

export const checkoutFormSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    email: z.email("Email is required"),
  }),

  shippingAddress: z.object({
    address1: z.string().trim().min(1, "Address is required"),
    address2: z.string().optional(),
    city: z.string().trim().min(1, "City is required"),
    state: z.string().trim().min(1, "State is required"),
    zip: z.string().length(5, "ZIP code must be of 5 characters"),
    country: z.string().trim().min(1, "Country is required"),
  }),

  payment: z.object({
    cardName: z.string().trim().min(1, "Card name is required"),
    cardNumber: z
      .string()
      .min(13, "Invalid card number. It must be at least 13 characters")
      .max(19, "Invalid card number. It must be at most 19 characters"),
    cvv: z.string().min(3, "Invalid cvv").max(4, "invalid cvv"),
    cardType: z.string().trim().min(1, "Card type is required")
  }),
});
export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;

export const personalInfoSchema = checkoutFormSchema.shape.personalInfo;
export type PersonalInfoSchema = CheckoutFormSchema['personalInfo']

export const shippingAddressSchema = checkoutFormSchema.shape.shippingAddress;
export type ShippingAddressSchema = CheckoutFormSchema['shippingAddress']

export const paymentSchema = checkoutFormSchema.shape.payment;
export type PaymentSchema = CheckoutFormSchema['payment']
