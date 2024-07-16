import React from "react";
import { View, Text } from "react-native";
import CardHome from "../../components/CardDefault";

import styles from "./style";
import SearchInput from "../../components/SearchInput";
import { categories } from "../../../mockData";

import colors from "../../../assets/colors";

const AllCategories: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>All categories</Text>
    </View>
  );
};

export default AllCategories;
