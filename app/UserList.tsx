import React, { useEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS } from 'react-native-reanimated';
import userData from './data.json';

type RootStackParamList = {
  UserList: undefined;
  Profile: { name: string; email: string; photo_url: string };
};

type UserListScreenNavigationProp = NavigationProp<RootStackParamList, 'UserList'>;

interface UserListProps {
  navigation: UserListScreenNavigationProp;
}

export default function UserList({ navigation }: UserListProps) {
  return (
    <ScrollView>
      {userData.map((data, index) => {
        const animation = useSharedValue(0);

        useEffect(() => {
          // Using runOnJS to create a delay effect for each item
          setTimeout(() => {
            animation.value = withTiming(1, {
              duration: 500,
              easing: Easing.out(Easing.exp),
            });
          }, index * 150);
        }, []);

        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: animation.value,
            transform: [{ translateY: 20 * (1 - animation.value) }],
          };
        });

        return (
          <Animated.View style={[styles.container, animatedStyle]} key={data.name}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Profile', {
                  name: data.name,
                  email: data.email,
                  photo_url: data.photo_url,
                })
              }
            >
              <Image source={{ uri: data.photo_url }} style={styles.avatar} />
              <View>
                <Text style={styles.boldText}>{data.name}</Text>
                <Text style={styles.boldText}>{data.email}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    display: 'flex',
  },
  card: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: 325,
    gap: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
