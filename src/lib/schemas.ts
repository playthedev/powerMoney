import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,15}$/, "Enter a valid phone number"),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  interest: z.string().trim().min(1, "Select what you're interested in").max(150),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
