import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'


export function GradientBg() {
    return (

        <LinearGradient
            colors={['#0F766E', '#0891B2']}
            style={StyleSheet.absoluteFill}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        />

    )
}