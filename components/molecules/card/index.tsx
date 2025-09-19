import React from "react";
import { View, ViewProps } from "react-native";

type CardProps = ViewProps & {
    title?: string;
    children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
    return (
        <View
            className={`bg-white rounded-2xl shadow p-4 ${className || ""}`}
            {...props}
        />
    );
};
