import { StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather as Icon } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "../../assets/colors";
import Header from "../components/Header";
import AllCategories from "./AllCategories";
import HeaderSearch from "../components/HeaderSearch";
import Calendar from "./Calendar";

export type RootStackParamList = {
  MainNavigator: undefined;
  AllCategories: undefined;
  DrawerNavigator: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Payments" component={Calendar} />
      <Drawer.Screen name="Address" component={Calendar} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen
        name="AllCategories"
        component={AllCategories}
        options={{ header: () => <HeaderSearch /> }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
