import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "./style";

interface CardDefaultProps {
  children?: React.ReactNode;
}

const CardDefault = ({ children }: CardDefaultProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default CardDefault;
