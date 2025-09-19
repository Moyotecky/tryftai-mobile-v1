import { FieldValues, useController } from 'react-hook-form';
import { Input } from '.';
import { FormInputProps } from './input.types';

export const FormInput = <T extends FieldValues>({
  value: _value,
  onChangeText,
  ...props
}: FormInputProps<T>) => {
  const { field } = useController({
    name: props.name as any,
    control: props.control,
    disabled: props.editable === false,
  });

  const value = _value || field.value;

  return <Input {...props} value={value} onChangeText={onChangeText || field.onChange} />;
};
