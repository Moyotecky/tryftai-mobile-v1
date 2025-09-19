
import { Ionicons } from "@expo/vector-icons";
import { Card, Divider, Text } from '@tryftai/components';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type Transaction = {
    title: string;
    amount: number;
    category: string;
    date: string;        // e.g. "Aug 23"
};

export const transactions: Transaction[] = [
    {
        title: "Amazon.com",
        amount: -420.89,
        category: "Shopping",
        date: "Aug 23",
    },
    {
        title: "Transfer from Leo...",
        amount: 1650.90,
        category: "Incoming",
        date: "Aug 16",
    },
    {
        title: "Wegman’s",
        amount: -85.76,
        category: "Groceries",
        date: "Aug 15",
    },
];


type TransactionCardProps = {
    transaction: Transaction;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
    const isExpense = transaction.amount < 0;

    return (
        <View className="w-full bg-white items-center p-4 gap-4 flex-row">
            <View className="w-10 h-10 rounded-full bg-gray-200 mr-3" />

            <View style={{ width: '90%' }}>
                <View className="flex-row items-center justify-between">
                    <Text className="text-xl text-gray-800" weight='semi_bold'>
                        {transaction.title}
                    </Text>
                    <Text
                        className={`text-xl ${isExpense ? "text-gray-500" : "text-green-600"}`}
                        weight='semi_bold'
                    >
                        {isExpense ? "" : "+"}₦{Math.abs(transaction.amount).toLocaleString()}
                    </Text>
                </View>
                <View className="flex-row justify-between mt-1">
                    <Text className="text-lg text-gray-400" weight='semi_bold'>{transaction.category}</Text>
                    <Text className="text-lg text-gray-400">{transaction.date}</Text>
                </View>

            </View>
        </View>

    );
};
export function MonthDiff() {
    return (
        <View className='mt-10 bg-gray-400'>

            <Text className='text-3xl' weight='bold'>
                This month
            </Text>
            <Text className='text-lg' weight='medium'>
                You{"'"}ve spent ₦8.64 more than last month
            </Text>


            <Card className='mt-4'>
                {transactions.map((tx, index) => (
                    <React.Fragment key={index}>
                        <TransactionCard transaction={tx} />

                        {transactions.length - 1 !== index && <Divider />}
                    </React.Fragment>
                ))}

                <TouchableOpacity style={{ width: '75%', marginVertical: 12 }} className="flex-row items-center mx-auto bg-gray-200 rounded-full py-5 justify-center">
                    <Text className="text-xl" weight="semi_bold">See all transactions</Text>
                    <View className="ml-5">
                        <Ionicons name="chevron-forward" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </Card>
        </View>

    )
}