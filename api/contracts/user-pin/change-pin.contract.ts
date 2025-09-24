import { z } from 'zod';

export const ChangeUserPinRequestSchema = z.object({
  pin: z.string(),
  confirmPin: z.string(),
});

export type ChangeUserPinRequest = z.infer<typeof ChangeUserPinRequestSchema>;

export const ChangeUserPinResponseSchema = z.object({
  message: z.string(),
  user: z.any(),
});

export type ChangeUserPinResponse = z.infer<typeof ChangeUserPinResponseSchema>;
