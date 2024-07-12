import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  inputSearch: {
    padding: 12,
    backgroundColor: colors.darkWhite,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white2,
  },
  buttonSearch: {
    position: "absolute",
    right: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
  },
  buttonBack: {
    position: "absolute",
    left: 10,
  },
});

export default styles;
