import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const RegisterUserEmailRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
});

export type RegisterUserEmailRequest = z.infer<typeof RegisterUserEmailRequestSchema>;

export const RegisterUserEmailResponseSchema = z.object({
  message: z.string(),
  user: UserSchema,
});

export type RegisterUserEmailResponse = z.infer<typeof RegisterUserEmailResponseSchema>;
