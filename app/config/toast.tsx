import { BaseToastProps, SuccessToast } from "react-native-toast-message"

import colors from "./colors"

export default {
  success: (props: BaseToastProps) => (
    <SuccessToast
      {...props}
      style={{
        backgroundColor: colors.light,
        padding: 2
      }}
      text1Style={{
        color: colors.black,
        fontSize: 18,
        fontWeight: "400"
      }}
    />
  )
}
