import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import colors from "../../../assets/colors";
import HeaderDrawerContent from "../HeaderDrawerContent";
import styles from "./style";
import FooterDrawerContent from "../FooterDrawerContent";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderDrawerContent />
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <FooterDrawerContent />
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
