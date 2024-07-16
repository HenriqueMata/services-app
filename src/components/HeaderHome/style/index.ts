import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.white,
  },
  containerText: { marginLeft: 12 },
  textLocation: { fontSize: 10 },

  // TextWithDropDown

  textWithDropDownContainer: { flexDirection: "row" },
  textStreet: { fontSize: 14, marginRight: 8 },
});

export default styles;
