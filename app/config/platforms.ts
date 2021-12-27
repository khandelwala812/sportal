import { Platform } from "react-native"

export default {
  isWeb: Platform.OS === "web",
  isMobile: Platform.OS !== "web",
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android"
}
