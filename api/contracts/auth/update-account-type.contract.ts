import { z } from 'zod';

export const UpdateAccountTypeRequestSchema = z.object({
  accountType: z.enum(['Student', 'Individual/Employer', ''] as const, {
    error: 'Account type must be Student or Individual/Employment',
  }),
});

export type UpdateAccountTypeRequest = z.infer<typeof UpdateAccountTypeRequestSchema>;

export const UpdateAccountTypeResponseSchema = z.object({
  _id: z.string(),
  email: z.string(),
  accountType: z.string(),
});

export type UpdateAccountTypeResponse = z.infer<typeof UpdateAccountTypeResponseSchema>;
