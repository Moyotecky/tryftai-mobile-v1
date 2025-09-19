import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const ForgotUserPasswordRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
});

export type ForgotUserPasswordRequest = z.infer<typeof ForgotUserPasswordRequestSchema>;

export const ForgotUserPasswordResponseSchema = z.object({
  message: z.string(),
  user: UserSchema,
});

export type ForgotUserPasswordResponse = z.infer<typeof ForgotUserPasswordResponseSchema>;
