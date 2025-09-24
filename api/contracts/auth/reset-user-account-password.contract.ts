import { z } from 'zod';
import { UserSchema } from '../user/user.contract';

export const ResetUserPasswordRequestSchema = z
  .object({
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type ResetUserPasswordRequest = z.infer<typeof ResetUserPasswordRequestSchema>;

export const ResetUserPasswordResponseSchema = z.object({
  message: z.string(),
  user: UserSchema,
});

export type ResetUserPasswordResponse = z.infer<typeof ResetUserPasswordResponseSchema>;
