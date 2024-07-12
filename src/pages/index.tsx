import { StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather as Icon } from "@expo/vector-icons";
import colors from "../../assets/colors";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function MainNavigator() {
  return (
    <BottomTab.Navigator labeled={false}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={26}
              color={focused ? colors.primaryColor : colors.gray}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="file-text"
              size={26}
              color={focused ? colors.primaryColor : colors.gray}
            />
          ),
        }}
        name="News"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bell"
              size={26}
              color={focused ? colors.primaryColor : colors.gray}
            />
          ),
        }}
        name="Notifications"
        component={HomeScreen}
      />

      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="message-square"
              size={26}
              color={focused ? colors.primaryColor : colors.gray}
            />
          ),
        }}
        name="Messages"
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
