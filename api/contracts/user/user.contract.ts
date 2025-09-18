// contracts/user.ts
import { z } from 'zod';

export const UserSchema = z.object({
  email: z.email(),
  emailVerified: z.boolean(),
  hasPin: z.boolean(),
  failedPinAttempts: z.number(),
  monthlyIncome: z.number(),
  balance: z.number(),
  isBasicProfileCompleted: z.boolean(),
  isFullProfileCompleted: z.boolean(),
  kycStatus: z.string(),
  uploadedDocuments: z.array(z.any()),
  bvn: z.string().nullable(),
  isActive: z.boolean(),
  personalSavings: z.array(z.any()),
  groupSavings: z.array(z.any()),
  totalInterestEarned: z.number(),
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
});

export type User = z.infer<typeof UserSchema>;
