import React, { FC } from "react"
import * as Yup from "yup"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { TFormikHelpers } from "../../types"
import client from "../../api/client"
import routes from "../../config/routes"
import BoxLayout from "../../layouts/BoxLayout"
import FormField from "../../components/FormField"

interface IResetPasswordPageProps {
  route: {
    params: {
      email: string
    }
  }
}

interface IResetPasswordFormValues {
  newPassword: string
  confirmNewPassword: string
}

const initialValues = {
  newPassword: "",
  confirmNewPassword: ""
}

const ResetPasswordPage: FC<IResetPasswordPageProps> = ({ route }) => {
  const navigation = useNavigation()
  const { email } = route.params
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(8).required().label("New password"),
    confirmNewPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword"), null], "Passwords don't match.")
      .label("Confirm new password")
  })

  const handleSubmit = async (
    { newPassword }: IResetPasswordFormValues,
    { setErrors }: TFormikHelpers
  ) => {
    const response = await client.patch("/users/reset-password", {
      data: {
        email,
        newPassword
      }
    })

    if (response.ok) {
      navigation.navigate(routes.LOGIN)
    } else {
      setErrors({ newPassword: "Can not be the same as current password" })
    }
  }

  return (
    <BoxLayout
      title="Reset Password"
      head={<SC.Title>Reset your password</SC.Title>}
      isForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        name="newPassword"
        placeholder="New password"
        secureTextEntry
      />
      <FormField
        name="confirmNewPassword"
        placeholder="Re-enter new password"
        secureTextEntry
      />
      <SC.ResetButton title="Reset" />
    </BoxLayout>
  )
}

export default ResetPasswordPage
