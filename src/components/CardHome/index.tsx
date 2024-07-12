import React, { Children } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "./style";

interface CardHomeProps {
  children?: React.ReactNode;
}

const CardHome = ({ children }: CardHomeProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default CardHome;
