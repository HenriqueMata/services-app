import React from "react";
import { ColorValue, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "./style";

import { Feather as Icon } from "@expo/vector-icons";

interface CardOfferProps {
  title: String;
  backgroundColor: ColorValue;
  textColor: ColorValue;
  offer: Number;
}

const CardOffer = ({
  title,
  backgroundColor,
  offer,
  textColor,
}: CardOfferProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textOffer}>{`Get ${offer}%`}</Text>
      <TouchableOpacity style={styles.buttonOffer}>
        <Text style={{ color: textColor }}>Grab Offer</Text>
        <Icon name="chevron-right" size={16} color={textColor} />
      </TouchableOpacity>
    </View>
  );
};

export default CardOffer;
