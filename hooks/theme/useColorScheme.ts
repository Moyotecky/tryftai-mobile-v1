import { useThemeStore } from '../store/useThemeStore';

export const useColorScheme = () => {
  const { mode } = useThemeStore();

  return mode;
};
