import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../assets/colors";
import { Feather as Icon } from "@expo/vector-icons";

const SearchInput: React.FC = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <TextInput
        placeholder="Search what you need..."
        placeholderTextColor={colors.gray}
        style={{
          padding: 12,
          backgroundColor: colors.darkWhite,
          height: 52,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.white2,
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          padding: 8,
          borderRadius: 8,
          backgroundColor: colors.primaryColor,
          justifyContent: "center",
        }}
      >
        <Icon name="search" size={18} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
