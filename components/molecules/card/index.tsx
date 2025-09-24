import React from 'react';
import { View, ViewProps } from 'react-native';

type CardProps = ViewProps & {
  title?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return <View className={`rounded-2xl bg-white p-4 shadow ${className || ''}`} {...props} />;
};
