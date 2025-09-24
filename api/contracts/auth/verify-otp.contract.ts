import { z } from 'zod';

export const VerifyOtpRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
  otp: z.string().min(1, 'OTP is required').max(6, 'OTP must be 6 digits'),
});

export type VerifyOtpRequest = z.infer<typeof VerifyOtpRequestSchema>;

export const VerifyOtpResponseSchema = z.object({
  message: z.string(),
  accessToken: z.object({
    accessToken: z.string(),
  }),
});

export type VerifyOtpResponse = z.infer<typeof VerifyOtpResponseSchema>;
