import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const LoginUserEmailRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginUserEmailRequest = z.infer<typeof LoginUserEmailRequestSchema>;

export const LoginUserEmailResponseSchema = z.object({
  message: z.string(),
  accessToken: z.string(),
  user: UserSchema?.nullable(),
});

export type LoginUserEmailResponse = z.infer<typeof LoginUserEmailResponseSchema>;
