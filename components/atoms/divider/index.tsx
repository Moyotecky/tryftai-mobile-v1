/**
 * Divider.tsx
 * ----------------------
 * A simple horizontal or vertical line used to separate content.
 *
 * Props:
 * - orientation: "horizontal" | "vertical" (default: horizontal)
 * - thickness: number (line thickness, default: 1)
 * - color: string (Tailwind class or HEX, default: bg-gray-300)
 * - length: number | string (line length, default: full width/height)
 *
 * Example:
 * <Divider />
 * <Divider orientation="vertical" length={40} />
 *
 * Author: Kehinde S.
 * Created: Sept 2025
 */

import React from "react";
import { DimensionValue, View } from "react-native";

type DividerProps = {
    orientation?: "horizontal" | "vertical";
    thickness?: number;
    color?: string; // Tailwind class or HEX
    length?: DimensionValue; // accepts number or percentage string
    className?: string;
};

export const Divider: React.FC<DividerProps> = ({
    orientation = "horizontal",
    thickness = 1,
    color = "bg-gray-300",
    length,
    className
}) => {
    if (orientation === "vertical") {
        return (
            <View
                className={`${color} ${className}`}
                style={{
                    width: thickness,
                    height: length ?? "100%" as DimensionValue,
                }}
            />
        );
    }

    return (
        <View
            className={`${color} ${className}`}
            style={{
                height: thickness,
                width: length ?? "100%" as DimensionValue,
            }}
        />
    );
};