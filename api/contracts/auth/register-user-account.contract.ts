import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const RegisterUserEmailRequestSchema = z.object({
  email: z.email(),
});

export type RegisterUserEmailRequest = z.infer<typeof RegisterUserEmailRequestSchema>;

export const RegisterUserEmailResponseSchema = z.object({
  message: z.string(),
  user: UserSchema,
});

export type RegisterUserEmailResponse = z.infer<typeof RegisterUserEmailResponseSchema>;
