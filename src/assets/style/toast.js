import { Platform } from "react-native";
const styleToast = {
  backgroundColor: "#9f1f63",
  width: 300,
  height: Platform.OS === "ios" ? 35 : 40,
  color: "#ffffff",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

export default styleToast;
