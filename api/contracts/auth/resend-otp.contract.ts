import { z } from 'zod';

export const ResendOtpRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
});

export type ResendOtpRequest = z.infer<typeof ResendOtpRequestSchema>;

export const ResendOtpResponseSchema = z.object({
  message: z.string(),
});

export type ResendOtpResponse = z.infer<typeof ResendOtpResponseSchema>;
