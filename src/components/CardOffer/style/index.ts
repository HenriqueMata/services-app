import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    padding: 16,
    borderRadius: 8,
  },
  textTitle: { fontSize: 16 },
  textOffer: { fontSize: 48, fontWeight: "600", marginVertical: 12 },
  buttonOffer: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 25,
    padding: 8,
    backgroundColor: colors.white,
  },
});

export default styles;
