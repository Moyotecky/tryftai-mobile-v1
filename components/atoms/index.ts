/**
 * Barrel file for UI components.
 *
 * This file re-exports modules from individual component files
 * (button, image, input, text) so they can be imported from a
 * single entry point.
 *
 * Example:
 *   import { Button, Input } from '@tryftai/components';
 *
 * Benefits:
 * - Cleaner import paths
 * - Centralized exports for better organization
 * - Easier to scale as more UI components are added
 */
export * from './button';
export * from './divider';
export * from './image';
export * from './input';
export * from './text';

