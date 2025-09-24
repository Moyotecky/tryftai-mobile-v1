// contracts/user.ts
import { z } from 'zod';

export const VirtualAccountSchema = z.object({
  accountNumber: z.string(),
  accountName: z.string(),
  bankName: z.string(),
});

export const UserSchema = z.object({
  email: z.email(),
  emailVerified: z.boolean(),
  accountType: z.string(),
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
  virtualAccount: VirtualAccountSchema,
});

export type User = z.infer<typeof UserSchema>;
