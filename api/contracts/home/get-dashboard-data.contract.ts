import { z } from 'zod';

export const GetDashboardSummaryRequestSchema = z.object({
  email: z.email({ error: 'Email is invalid' }).min(1, 'Email is required'),
});

export type GetDashboardSummaryRequest = z.infer<typeof GetDashboardSummaryRequestSchema>;

export const GetDashboardSummaryResponseSchema = z.object({
  _id: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  monthlyIncome: z.number(),
  balance: z.number(),
  isBasicProfileCompleted: z.boolean(),
  isFullProfileCompleted: z.boolean(),
  kycStatus: z.string(),
  uploadedDocuments: z.array(z.any()),
  bvn: z.string().nullable(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
  accountType: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  occupation: z.string(),
  paystackCustomerCode: z.string(),
  personalSavings: z.array(z.any()),
  groupSavings: z.array(z.any()),
  totalInterestEarned: z.number(),
  phoneNumber: z.string(),
  virtualAccount: z
    .object({
      accountNumber: z.string(),
      accountName: z.string(),
      bankName: z.string(),
      timestamps: z.string(),
      reference: z.string(),
      customer_id: z.string(),
    })
    .nullable(),
  savingsGoals: z
    .object({
      targetAmount: z.number(),
      timeframe: z.string(),
    })
    .nullable(),
});

export type GetDashboardSummaryResponse = z.infer<typeof GetDashboardSummaryResponseSchema>;
