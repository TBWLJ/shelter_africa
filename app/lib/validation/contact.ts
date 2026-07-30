import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name."),

  email: z
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .min(7, "Please enter your phone number."),

  property: z.string(),

  plotSize: z.string(),

  message: z
    .string()
    .min(10, "Tell us a little more.")
    .max(1000),
});

export type ContactFormValues =
  z.infer<typeof contactSchema>;