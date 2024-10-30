import { View, FlatList, ScrollView, StyleSheet } from "react-native"
import FriendProfile from "@/components/FriendProfile"
import friends from "@/scripts/data.json"
import { ThemedView } from "@/components/ThemedView"

const styles = StyleSheet.create({
    container: {
        paddingTop: 32

    }
})

export default function ProfileScreen() {
    return(
        <ThemedView style={styles.container}>
            <ScrollView>
                { friends.map((friend, index) => (
                    <FriendProfile 
                    key={ index }
                    name={friend.name}
                    email={friend.email}
                    sourceImage={friend.photo_url}
                    />
                )) }
            </ScrollView>
        </ThemedView>
    )
}