import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout'; // Import RootStackParamList from where it's defined


type EmailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EmailScreen'>;

interface EmailScreenProps {
  navigation: EmailScreenNavigationProp;
}

export default function EmailScreen({ navigation }: EmailScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Email List Page</Text>
      <Button onPress={() => navigation.navigate("HomeScreen")}>Go Home</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
