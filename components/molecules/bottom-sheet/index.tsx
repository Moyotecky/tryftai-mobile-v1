import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useColorScheme } from '@tryftai/hooks/theme/useColorScheme';
import { Colors } from '@tryftai/libs/constants/color';
import * as React from 'react';

const Sheet = React.forwardRef<
  BottomSheetModal,
  React.ComponentPropsWithoutRef<typeof BottomSheetModal> & {
    backDropBehavior?: 'close' | 'none';
  }
>(
  (
    {
      index = 1,
      backgroundStyle,
      style,
      handleIndicatorStyle,
      backDropBehavior = 'close',
      ...props
    },
    ref
  ) => {
    const scheme = useColorScheme();

    const renderBackdrop = React.useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} pressBehavior={backDropBehavior} disappearsOnIndex={-1} />
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        {...props}
        index={index}
        onChange={(index) => {
          console.log(`Bottom Sheet Modal Presentation Changed =>`, index);
        }}
        backgroundStyle={
          backgroundStyle ?? {
            backgroundColor: Colors[scheme].background,
          }
        }
        style={
          style ?? {
            borderWidth: 1,
            borderColor: Colors[scheme].container,
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
            backgroundColor: 'orange',
          }
        }
        handleIndicatorStyle={
          handleIndicatorStyle ?? {
            backgroundColor: Colors[scheme].card,
          }
        }
        backdropComponent={renderBackdrop}>
        <BottomSheetView className="h-full flex-[1]">{props?.children as any}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

function useSheetRef() {
  return React.useRef<BottomSheetModal>(null);
}

export { Sheet, useSheetRef };

Sheet.displayName = 'Sheet';
