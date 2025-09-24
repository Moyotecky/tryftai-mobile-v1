import { z } from 'zod';

export const UpdateProfileRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  occupation: z.string().optional(),
  schoolUniversity: z.string().optional(),
  accountType: z.string().optional(),
});

export type UpdateProfileRequest = z.infer<typeof UpdateProfileRequestSchema>;

export const UpdateProfileResponseSchema = z.object({
  _id: z.string(),
  email: z.string(),
  isBasicProfileCompleted: z.boolean(),
  virtualAccount: z.object({
    accountNumber: z.string(),
    accountName: z.string(),
    bankName: z.string(),
  }),
});

export type UpdateProfileResponse = z.infer<typeof UpdateProfileResponseSchema>;
