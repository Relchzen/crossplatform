// import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./HomeScreen";
import EmailScreen from "./EmailScreen";
import Profile from "./Profile";
import UserList from "./UserList";

export type RootStackParamList = {
  HomeScreen: undefined;
  EmailScreen: undefined;
  UserList: undefined;
  Profile: { name: string; email: string; photo_url: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>()


export default function RootLayout() {
  return (
    <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="EmailScreen" component={EmailScreen} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </PaperProvider>
  );
}
