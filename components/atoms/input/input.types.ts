import { Control, FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export interface FormInputProps<T extends FieldValues> extends TextInputProps {
  label: string;
  name: keyof T;
  control?: Control<T>;
  error?: string;
}
