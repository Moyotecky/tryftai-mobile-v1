import { Button, Divider, Text } from "@tryftai/components/atoms";
import { BackHeader } from "@tryftai/components/molecules";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NgnAccountDetails() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = async (text: string, label: string) => {
        await Clipboard.setStringAsync(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    const details = [
        { label: "Account Name", value: "Moyosoluwalorun Alabi" },
        { label: "Account Number", value: "7012738937" },
        { label: "Bank Name", value: "Wema Bank" },
    ];

    return (
        <SafeAreaView className="flex-1 bg-sky_light-500">
            <BackHeader title="" backIconColor="black" />
            <ScrollView
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Page Heading */}
                <Text weight="bold" className="text-4xl text-black mb-4">
                    Your NGN Account Details
                </Text>

                <Text weight="regular" className="text-black mb-6 text-lg">
                    Below is your NGN virtual account details, if you have not completed
                    your KYC, you might experience deposit limits
                </Text>

                {/* Account Details */}
                <View className=" rounded-2xl p-4 space-y-6">
                    {details.map((item, index) => (
                        <View key={index}>
                            <View className="flex-row items-center justify-between">
                                <View>
                                    <Text weight="regular" className="text-xl text-black">
                                        {item.label}
                                    </Text>
                                    <Text weight="semi_bold" className="text-2xl text-black">
                                        {item.value}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => copyToClipboard(item.value, item.label)}
                                    className="bg-white px-4 py-1 rounded-full border-gray-300"
                                >
                                    <Text weight="semi_bold" className=" text-xl">
                                        {copied === item.label ? "copied!" : "copy"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Divider className="my-6" />
                        </View>
                    ))}
                </View>

                {/* Deposit Tips */}
                <View className=" gap-3">
                    <Text weight="semi_bold" className="text-black mb-2">
                        💡 Deposit Tips
                    </Text>
                    <Text weight="semi_bold" className="text-primary-300 text-lg">
                        • Virtual account transfers are free and instant
                    </Text>
                    <Text weight="semi_bold" className="text-primary-300 text-lg">
                        • Card payments incur a 1.65% processing fee
                    </Text>
                    <Text weight="semi_bold" className="text-primary-300 text-lg">
                        • Check your bank&apos;s daily transaction limits
                    </Text>
                    <Text weight="semi_bold" className="text-primary-300 text-lg">
                        • Keep your transaction reference for records
                    </Text>
                    <Text weight="semi_bold" className="text-primary-300 text-lg">
                        • Contact support if your deposit doesn&apos;t reflect within 24 hours
                    </Text>
                </View>

                <Button title="Continue" className="mt-5" />
            </ScrollView>
        </SafeAreaView>
    );
}
