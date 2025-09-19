
import { Card, ProgressBar, Text } from '@tryftai/components';
import { formatPrice } from '@tryftai/helpers';
import { Image } from 'expo-image';
import { ScrollView, View } from 'react-native';



type ExpenseCategory = {
    category: string;
    amountSpent: number;
    budget: number;
    iconBg: string;
    icon: string
};

const expenseCategories: ExpenseCategory[] = [
    {
        category: "Food & Drinks",
        amountSpent: 31128,
        budget: 72000,
        iconBg: '#0D77CF',
        icon: require('@tryftai/assets/images/home/fork.svg')
    },
    {
        category: "Shopping",
        amountSpent: 60200,
        budget: 100000,
        iconBg: '#FFB800',
        icon: require('@tryftai/assets/images/home/shopping.svg')
    },
    {
        category: "Internet",
        amountSpent: 10000,
        budget: 30000,
        iconBg: '#0D77CF',
        icon: require('@tryftai/assets/images/home/fork.svg')
    },
    {
        category: "Transport",
        amountSpent: 8500,
        budget: 40000,
        iconBg: '#FFB800',
        icon: require('@tryftai/assets/images/home/shopping.svg')
    },
];


export function TopExpenses() {
    return (
        <View className='pl-4'>
            <Text weight='bold' className='text-3xl'>Top expenses</Text>

            <ScrollView horizontal contentContainerClassName='py-4 gap-8 mt-4 pl-4'>
                {
                    expenseCategories.map(expenseCategory => (<Card key={expenseCategory.category} style={{ width: 300 }}>

                        <View
                            style={{ width: 64, height: 64, backgroundColor: expenseCategory.iconBg }}
                            className={`items-center justify-center mb-4 rounded-full`}
                        >
                            <Image
                                source={expenseCategory.icon}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <Text className='text-2xl' weight='semi_bold'>
                            {expenseCategory.category}
                        </Text>
                        <Text className='text-gray-600 mt-8 ' weight='semi_bold'>
                            SPENT
                        </Text>
                        <View className='flex-row items-end gap-2'>
                            <Text className='text-2xl -mb-6' weight='semi_bold'>
                                {formatPrice(expenseCategory.amountSpent)}
                            </Text>

                            <Text className='text-gray'>
                                out of {formatPrice(expenseCategory.budget)}
                            </Text>
                        </View>
                        <ProgressBar progress={expenseCategory.amountSpent / expenseCategory.budget} className='mt-4' />
                    </Card>))
                }
            </ScrollView>
        </View>
    )
}