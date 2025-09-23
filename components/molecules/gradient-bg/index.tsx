import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";

type GradientBgProps = {
    bottomFill?: string;
};

export const GradientBg: React.FC<GradientBgProps> = ({
    bottomFill,
}) => {
    return (
        <View style={StyleSheet.absoluteFill}>

            <LinearGradient
                colors={["#0F766E", "#0891B2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: bottomFill ? 0.6 : 1 }}
            />

            {bottomFill && <View style={{ flex: 0.4, backgroundColor: bottomFill }} />}
        </View>
    );
};
