import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerHeader: { flexDirection: "row", alignItems: "center" },
  lineVertical: {
    height: "70%",
    width: 4,
    backgroundColor: colors.gray,
    marginRight: 8,
  },
  textHeader: { fontSize: 24 },
});

export default styles;
