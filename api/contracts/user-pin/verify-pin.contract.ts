import { z } from 'zod';

export const VerifyUserPinRequestSchema = z.object({
  pin: z.string(),
});

export type VerifyUserPinRequest = z.infer<typeof VerifyUserPinRequestSchema>;

export const VerifyUserPinResponseSchema = z.object({
  message: z.string(),
  user: z.any(),
});

export type VerifyUserPinResponse = z.infer<typeof VerifyUserPinResponseSchema>;
