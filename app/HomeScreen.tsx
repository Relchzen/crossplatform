import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import UserList from './UserList';

// Define the stack parameter list, including the "Email" route
type RootStackParamList = {
  Home: undefined;
  Email: undefined;
  UserList: undefined;
};

// Define the navigation prop type for the HomeScreen
type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

// Define the props for the HomeScreen component
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Navigation List</Text>
      <Button onPress={() => navigation.navigate("Email")}>Email</Button>
      <Button onPress={() => navigation.navigate("UserList")}>List of Users</Button>
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
