// lib/hookFactory.ts
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from '@tanstack/react-query';

export const createQueryHook = <TRes>(key: string, fn: () => Promise<TRes>) => {
  return (): UseQueryResult<TRes> =>
    useQuery({
      queryKey: [key],
      queryFn: fn,
    });
};

export const createMutationHook = <TVars, TRes>(
  key: string,
  fn: (vars: TVars) => Promise<TRes>
) => {
  return (): UseMutationResult<TRes, unknown, TVars> =>
    useMutation({
      mutationKey: [key],
      mutationFn: fn,
    });
};
