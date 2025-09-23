import { Text } from "@tryftai/components/atoms";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

type BudgetGaugeProps = {
  value: number;
  max: number;
};

export const BudgetGauge: React.FC<BudgetGaugeProps> = ({ value, max }) => {
  const percentage = value / max;

  const radius = 140;
  const strokeWidth = 20;
  const centerX = radius + strokeWidth;
  const centerY = radius + strokeWidth;
  const startAngle = Math.PI;
  const endAngle = 0;

  const arcAngle = Math.PI * percentage;

  const polarToCartesian = (angle: number) => ({
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  });

  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(startAngle + arcAngle);

  const d = `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 ${percentage > 0.5 ? 1 : 0} 1 ${end.x} ${end.y}
  `;

  return (
    <View style={styles.container}>
      <Svg
        width={radius * 2 + strokeWidth * 2}
        height={radius + strokeWidth * 2}
      >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#10B981" />
            <Stop offset="0.5" stopColor="#3B82F6" />
            <Stop offset="1" stopColor="#F59E0B" />
          </LinearGradient>
        </Defs>

        {/* background arc */}
        <Path
          d={`
            M ${polarToCartesian(startAngle).x} ${polarToCartesian(startAngle).y}
            A ${radius} ${radius} 0 1 1 ${polarToCartesian(endAngle).x} ${polarToCartesian(endAngle).y}
          `}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* progress arc */}
        <Path
          d={d}
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      </Svg>

      <View style={styles.labelContainer}>
        <Text weight="bold" style={styles.value}>₦{value.toLocaleString()}</Text>
        <Text style={styles.subtext}>left of ₦{max.toLocaleString()} budget</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    position: "absolute",
    top: "50%",
    alignItems: "center",
  },
  value: {
    fontSize: 40,
    fontWeight: "800",
    color: "#111827",
  },
  subtext: {
    fontSize: 14,
    color: "#4B5563",
  },
});
