import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Profile: { name: string; email: string; photo_url: string };
  UserList: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

export default function Profile({ navigation, route }: ProfileScreenProps) {
  const { name, email, photo_url } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo_url }} style={styles.avatar} />
      <Text style={styles.boldText}>{name}'s Profile</Text>
      <Text>Email: {email}</Text>
      <Button onPress={() => navigation.navigate("UserList")}>Go Back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
});
