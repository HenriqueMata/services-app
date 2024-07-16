import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24,
  },

  image: { width: 50, height: 50, borderRadius: 30 },
  containerText: { flex: 1, marginLeft: 12 },
  textName: { color: colors.white, fontWeight: "bold", fontSize: 16 },
  textEmail: { color: colors.darkWhite, fontSize: 12 },
});

export default styles;
