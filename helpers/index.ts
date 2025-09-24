/**
 * helpers
 * ----------------------
 * Centralized utility functions for the application.
 *
 * This file provides small, reusable helper methods that can be
 * imported across different features or modules. Keeping helpers
 * here ensures:
 *
 * Benefits:
 * - Reduces duplication of common logic
 * - Promotes consistency across the codebase
 * - Improves readability by abstracting repetitive patterns
 *
 * Typical use cases:
 * - String manipulation
 * - Date/time formatting
 * - Number/price formatting
 * - Data transformation utilities
 *
 * Author: Kehinde S.
 * Created: Sept 2025
 */

export const formatPrice = (amount: number, locale: string = 'en-NG'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
