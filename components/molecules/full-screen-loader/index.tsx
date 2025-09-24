import { useFullScreenLoadingStore } from '@tryftai/hooks/store/useFullScreenLoadingStore';
import { ActivityIndicator, View } from 'react-native';

export const FullScreenLoader = () => {
  const { isLoading } = useFullScreenLoadingStore();

  if (!isLoading) return null;

  return (
    <View className="absolute bottom-0 left-0 right-0 top-0 z-[10000] flex h-full w-full items-center justify-center bg-black/40">
      <View className="h-32 w-32 items-center justify-center rounded-full bg-white">
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};
