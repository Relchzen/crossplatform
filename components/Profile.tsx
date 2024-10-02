import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { ThemedView } from "./ThemedView"
import { ThemedText } from './ThemedText';
type Props = {
    name: string
    age: number
}

const Profile: React.FC<Props> = ({name, age}) => {
    return (
        <ThemedView>
            <ThemedText>Halo, namaku {name}!</ThemedText>
            <ThemedText>Umurku {age} tahun</ThemedText>
        </ThemedView>
    )
}

export default Profile