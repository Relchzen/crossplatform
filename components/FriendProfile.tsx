import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
interface FriendProfileProps {
    name: string;
    email: any;
    sourceImage: string;
  }

const styles = StyleSheet.create({
    FriendItem: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        justifyContent: 'center'
    }
})

const FriendProfile: React.FC<FriendProfileProps> = ({ name, email, sourceImage }) => {
    return(
        <View style={styles.FriendItem}>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
                <Image source={{uri: sourceImage}} alt={ sourceImage } style={{width: 100, height: 100}} />
            </View>
            <ThemedText style={{fontWeight: '500', fontSize: 18, textAlign: 'center'}}>{name}</ThemedText>
            <ThemedText style={{fontWeight: '400', textAlign: 'center'}}>{email}</ThemedText>
        </View>
    )
}

export default FriendProfile