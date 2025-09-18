// lib/hookFactory.ts
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export function createQueryHook<TRes>(key: string, fn: () => Promise<TRes>) {
  return (): UseQueryResult<TRes> =>
    useQuery({
      queryKey: [key],
      queryFn: fn,
    });
}

export function createMutationHook<TVars, TRes>(key: string, fn: (vars: TVars) => Promise<TRes>) {
  return (): UseMutationResult<TRes, unknown, TVars> =>
    useMutation({
      mutationKey: [key],
      mutationFn: fn,
    });
}
