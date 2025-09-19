import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

interface ProgressBarProps extends ViewProps {
    progress: number; // 0–1 range (e.g. 0.5 = 50%)
    height?: number;
    bgColor?: string; // background track color
    fillColor?: string; // progress color
    style?: ViewStyle // container style
    className?: string // extra class names
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    height = 15,
    bgColor = "bg-primary-100",
    fillColor = "bg-primary-500",
    style,
    className,
    ...props
}) => {
    return (
        <View
            className={`w-full rounded-full overflow-hidden ${bgColor} ${className}`}
            style={{ ...style, height }}
            {...props}
        >
            <View
                className={`h-full ${fillColor}`}
                style={{ width: `${Math.min(progress * 100, 100)}%` }}
            />
        </View>
    );
};
