import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

type GradientBgProps = {
    bottomFill?: string; // custom bottom color
};

export const GradientBg: React.FC<GradientBgProps> = ({
    bottomFill = "#F6F7F8",
}) => {
    return (
        <View style={StyleSheet.absoluteFill}>

            <LinearGradient
                colors={["#0F766E", "#0891B2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // horizontal gradient
                style={{ flex: 0.6 }}
            />

            <View style={{ flex: 0.4, backgroundColor: bottomFill }} />
        </View>
    );
};
