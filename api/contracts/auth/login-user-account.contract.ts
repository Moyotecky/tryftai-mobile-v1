import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const LoginUserEmailRequestSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type LoginUserEmailRequest = z.infer<typeof LoginUserEmailRequestSchema>;

export const LoginUserEmailResponseSchema = z.object({
  message: z.string(),
  user: UserSchema,
});

export type LoginUserEmailResponse = z.infer<typeof LoginUserEmailResponseSchema>;
