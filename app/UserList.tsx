import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
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
      {userData.map((data) => (
        <View style={styles.container} key={data.name}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => 
              navigation.navigate("Profile", { 
                name: data.name, 
                email: data.email, 
                photo_url: data.photo_url 
              })
            }
          >
            <Image source={{ uri: data.photo_url }} style={styles.avatar} />
            <View>
              <Text style={styles.boldText}>{data.name}</Text>
              <Text style={styles.boldText}>{data.email}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
  card: {
    borderWidth: 1,
    borderBlockColor: "black",
    borderRadius: 8,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8
  },
  avatar: {
    width: 75, 
    height: 75,
    borderRadius: 999
  },
  boldText: {
    fontWeight: "bold",
  },
});
