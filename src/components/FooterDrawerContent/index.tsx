import React from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons as Icon } from "@expo/vector-icons";
import colors from "../../../assets/colors";

import styles from "./style";
import SlideButton from "../SlideButton";

const FooterDrawerContent: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.gray,
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 12, marginBottom: 24 }}>
        <Icon name="question" size={18} color={colors.white} />
        <Text
          style={{ color: colors.white, fontWeight: "bold", marginLeft: 12 }}
        >
          Colour Scheme
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <SlideButton />
      </View>
    </View>
  );
};

export default FooterDrawerContent;
