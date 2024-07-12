import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  textName: {
    fontSize: 18,
    color: colors.gray,
    fontWeight: "bold",
  },
  textWelcome: { fontSize: 36, fontWeight: "bold", marginVertical: 16 },
});

export default styles;
