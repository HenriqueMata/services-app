import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import styles from "./style";
import { Feather as Icon } from "@expo/vector-icons";
import { FontAwesome6 as FontAwesome } from "@expo/vector-icons";
import colors from "../../../assets/colors";

const Header: React.FC = () => {
  const TextWithDropDrown = () => (
    <View style={styles.textWithDropDownContainer}>
      <Text style={styles.textStreet}>15A,James Street</Text>
      <FontAwesome name="sort-down" size={14} color={colors.secondColor} />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="menu" size={32} color={colors.secondColor} />
        <View style={styles.containerText}>
          <Text style={styles.textLocation}>CURRENT LOCATION</Text>
          <TextWithDropDrown />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
