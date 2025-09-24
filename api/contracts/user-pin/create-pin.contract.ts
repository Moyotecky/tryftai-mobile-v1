import { z } from 'zod';

export const CreateUserPinRequestSchema = z.object({
  pin: z.string(),
  confirmPin: z.string(),
});

export type CreateUserPinRequest = z.infer<typeof CreateUserPinRequestSchema>;

export const CreateUserPinResponseSchema = z.object({
  message: z.string(),
  user: z.any(),
});

export type CreateUserPinResponse = z.infer<typeof CreateUserPinResponseSchema>;
