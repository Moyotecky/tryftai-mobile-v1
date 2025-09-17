/**
 * IProviderProps
 * ----------------------
 * Defines the props for a React Provider component.
 *
 * This interface ensures type safety when building
 * context providers that wrap parts of the app with
 * shared state or functionality.
 *
 * @property {React.ReactNode} children
 * - The nested React elements to be rendered inside the provider.
 * - Typically represents the app or subtree that the provider manages.
 *
 */

export interface IProviderProps {
  children: React.ReactNode;
}
