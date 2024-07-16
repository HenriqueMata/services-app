import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome6 as FontAwesome } from "@expo/vector-icons";

import { DrawerParamList } from "../../pages";
import colors from "../../../assets/colors";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type HeaderHomeNavigationProp = DrawerNavigationProp<
  DrawerParamList,
  "BottomNavigator"
>;

const HeaderHome: React.FC = () => {
  const navigation = useNavigation<HeaderHomeNavigationProp>();

  const TextWithDropDrown = () => (
    <View style={styles.textWithDropDownContainer}>
      <Text style={styles.textStreet}>15A,James Street</Text>
      <FontAwesome name="sort-down" size={14} color={colors.secondColor} />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={32} color={colors.secondColor} />
        </TouchableOpacity>
        <View style={styles.containerText}>
          <Text style={styles.textLocation}>CURRENT LOCATION</Text>
          <TextWithDropDrown />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;
