import React from "react";
import { View, Text, ColorValue, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import icons, { IconSet } from "../../utils/iconHelper";
import styles from "./style";
import colors from "../../../assets/colors";

interface CardCategoriesProps {
  iconName: keyof IconSet;
  label: string;
  backgroundColor: ColorValue;
  onPress?: () => void;
  index?: number;
}

const CardCategories = ({
  iconName,
  label,
  backgroundColor,
  onPress,
  index,
}: CardCategoriesProps) => {
  const IconSVG = icons[iconName];
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.cardContainer, { backgroundColor }]}>
          {index === 3 ? (
            <Icon name="arrow-right" size={35} color={colors.gray} />
          ) : (
            <IconSVG width={35} height={35} />
          )}
        </View>
        <Text style={styles.txtLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardCategories;
