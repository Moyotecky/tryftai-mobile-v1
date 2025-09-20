import { Ionicons } from "@expo/vector-icons";
import { Text } from "@tryftai/components/atoms";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BackHeaderProps = {
    title: string;
    onBack?: () => void;
    headerRight?: React.ReactNode;
    containerClassName?: string;
    titleClassName?: string;
    iconClassName?: string;
    backIconColor?: string;
};

export const BackHeader: React.FC<BackHeaderProps> = ({
    title,
    onBack,
    headerRight,
    containerClassName = "",
    titleClassName = "text-2xl font-bold text-gray-800",
    iconClassName = "pr-4",
    backIconColor = "#FFF",
}) => {
    const router = useRouter();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    };

    return (
        <SafeAreaView edges={["top"]} className={`bg-inherit ${containerClassName}`}>
            <View className="flex-row items-center justify-between px-4 py-3">
                <TouchableOpacity onPress={handleBack} className={iconClassName}>
                    <Ionicons name="chevron-back" size={24} color={backIconColor} />
                </TouchableOpacity>

                <Text weight="semi_bold" className={`flex-1 text-center text-2xl ${titleClassName}`}>
                    {title}
                </Text>

                <View className="pl-4">{headerRight ?? <View className="w-6" />}</View>
            </View>
        </SafeAreaView>
    );
};
