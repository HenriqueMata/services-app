import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather as Icon, Ionicons } from "@expo/vector-icons";

import HeaderSearch from "../components/HeaderSearch";
import HeaderHome from "../components/HeaderHome";
import AllCategories from "./AllCategories";
import Calendar from "./Calendar";
import HomeScreen from "./HomeScreen";

import colors from "../../assets/colors";
import CustomDrawerContent from "../components/CustomDrawerContent";

export type RootStackParamList = {
  AllCategories: undefined;
  DrawerNavigator: undefined;
};

export type DrawerParamList = {
  BottomNavigator: undefined;
  Calendar: undefined;
  Payments: undefined;
  Address: undefined;
  Notification: undefined;
  Offers: undefined;
  ReferFriend: undefined;
  Support: undefined;
};

interface LabelDrawerInterface {
  focused: boolean;
  routeName: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator<DrawerParamList>();

const LabelDrawer: React.FC<LabelDrawerInterface> = ({
  focused,
  routeName,
  iconName,
}) => (
  <View style={styles.containerDrawerLabel}>
    <Ionicons
      name={iconName}
      size={25}
      color={focused ? colors.primaryColor : colors.white}
    />
    <Text
      style={[
        styles.label,
        { color: focused ? colors.primaryColor : colors.white },
      ]}
    >
      {routeName}
    </Text>
  </View>
);

function BottomNavigator() {
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: colors.white }}
      labeled={false}
    >
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
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: colors.primaryColor,
        drawerActiveBackgroundColor: colors.white,

        header: () => <HeaderHome />,
      }}
      drawerContent={({ state, navigation, descriptors }) => (
        <CustomDrawerContent
          state={state}
          navigation={navigation}
          descriptors={descriptors}
        />
      )}
    >
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Home"}
              iconName={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Calendar"}
              iconName={focused ? "calendar-clear" : "calendar-clear-outline"}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Payments"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Payments"}
              iconName={focused ? "wallet" : "wallet-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Address"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Address"}
              iconName={focused ? "location" : "location-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Notification"}
              iconName={focused ? "notifications" : "notifications-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Offers"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Offers"}
              iconName={focused ? "pricetag" : "pricetag-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ReferFriend"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Refer a Friend"}
              iconName={focused ? "person-add" : "person-add-outline"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Calendar}
        options={{
          drawerLabel: ({ focused }) => (
            <LabelDrawer
              focused={focused}
              routeName={"Support"}
              iconName={focused ? "call" : "call-outline"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllCategories"
        component={AllCategories}
        options={{ header: () => <HeaderSearch /> }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;

const styles = StyleSheet.create({
  containerDrawerLabel: { flexDirection: "row", alignItems: "center" },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },
});
