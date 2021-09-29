import { Platfrom } from "react-native";
import colors from "./colors";

export default {
  colors: colors, // access to color palette
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
