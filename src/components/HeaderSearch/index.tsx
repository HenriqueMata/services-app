import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from "./style";
import colors from "../../../assets/colors";
import SearchInput from "../SearchInput";
import { RootStackParamList } from "../../pages";

type HeaderSearchNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AllCategories"
>;

const HeaderSearch: React.FC = () => {
  const navigation = useNavigation<HeaderSearchNavigationProp>();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchInput
          placeholder="Search Category"
          header={true}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderSearch;
