import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const HeaderDrawerContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/photo.jpeg")}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text style={styles.textName}>Henrique da Mata</Text>
        <Text style={styles.textEmail}>henrique.damata.novais@gmail.com</Text>
      </View>
    </View>
  );
};

export default HeaderDrawerContent;
