import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../assets/colors";
import { Feather as Icon } from "@expo/vector-icons";
import styles from "./style";

interface SearchInputProps {
  placeholder: string;
  header?: boolean;
  onPress?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  header,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        style={[styles.inputSearch, { paddingLeft: header ? 52 : 16 }]}
      />
      <TouchableOpacity style={styles.buttonSearch}>
        <Icon name="search" size={18} color={colors.white} />
      </TouchableOpacity>
      {header && (
        <TouchableOpacity style={styles.buttonBack} onPress={onPress}>
          <Icon name="arrow-left" size={28} color={colors.secondColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
