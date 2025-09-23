import { z } from 'zod';

export const ForgotUserPasswordRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
});

export type ForgotUserPasswordRequest = z.infer<typeof ForgotUserPasswordRequestSchema>;

export const ForgotUserPasswordResponseSchema = z.object({
  message: z.string(),
});

export type ForgotUserPasswordResponse = z.infer<typeof ForgotUserPasswordResponseSchema>;
