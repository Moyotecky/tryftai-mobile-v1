import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
  type ToastProps,
} from 'react-native-toast-message';

export const toastConfig = (isModal: boolean) => {
  return {
    success: (props: ToastProps) => (
      <SuccessToast
        {...props}
        style={[
          {
            backgroundColor: '#16a34a',
            borderLeftWidth: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '90%',
            marginTop: 15,
            height: 85,
          },
          isModal && { position: 'absolute' },
        ]}
        text1Props={{ allowFontScaling: false }}
        text2Props={{ allowFontScaling: false, numberOfLines: 4 }}
        text1Style={{ fontSize: 16, color: 'white' }}
        text2Style={{ fontSize: 12, color: 'white' }}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        style={[
          {
            backgroundColor: '#dc2626',
            borderLeftWidth: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '90%',
            marginTop: 15,
            height: 85,
          },
          isModal && { position: 'absolute' },
        ]}
        text1Props={{ allowFontScaling: false }}
        text2Props={{ allowFontScaling: false, numberOfLines: 4 }}
        text1Style={{ fontSize: 16, color: 'white' }}
        text2Style={{ fontSize: 12, color: 'white' }}
      />
    ),
    info: (props: ToastProps) => (
      <InfoToast
        {...props}
        style={[
          {
            backgroundColor: '#dc2626',
            borderLeftWidth: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '90%',
            marginTop: 15,
            height: 85,
          },
          isModal && { position: 'absolute' },
        ]}
        text1Props={{ allowFontScaling: false }}
        text2Props={{ allowFontScaling: false, numberOfLines: 4 }}
        text1Style={{ fontSize: 16, color: 'white' }}
        text2Style={{ fontSize: 12, color: 'white' }}
      />
    ),
  };
};

export const Notify = (
  type: 'success' | 'error' | 'info',
  payload: { message?: string; description?: string; duration?: number }
) => {
  Toast.show({
    type,
    text1: payload?.message,
    text2: payload?.description,
    visibilityTime: payload?.duration || 3000,
  });
};
