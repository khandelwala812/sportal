import { BaseToastProps, SuccessToast } from "react-native-toast-message"

import colors from "./colors"

export default {
  success: (props: BaseToastProps) => (
    <SuccessToast
      {...props}
      style={{
        backgroundColor: colors.foreground,
        padding: 2
      }}
      text1Style={{
        color: colors.white,
        fontSize: 18,
        fontWeight: "400"
      }}
    />
  )
}
