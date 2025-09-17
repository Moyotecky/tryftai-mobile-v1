import { TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
  weight?: 'regular' | 'medium' | 'semi_bold' | 'bold' | 'extra_bold' | 'black';
}
