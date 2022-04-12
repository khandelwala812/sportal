import React from "react"
import { FormikHelpers } from "formik"
import { useNavigation } from "@react-navigation/native"
import * as Yup from "yup"

import * as SC from "./styles"
import { IUser } from "../../types"
import useAuth from "../../hooks/useAuth"
import client from "../../api/client"
import routes from "../../config/routes"
import FormField from "../../components/FormField"
import Form from "../../components/Form"
import Link from "../../components/Link"

interface ILoginFormValues {
  email: string
  password: string
}

interface ILoginResponse {
  user: IUser
  invalidEmail: boolean
  invalidPassword: boolean
}

type TFormikHelpers = FormikHelpers<{
  [key: string]: string
}>

const initialValues = {
  email: "",
  password: ""
}

const LoginPage = () => {
  const navigation = useNavigation()
  const { setUser } = useAuth()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(8).required().label("Password")
  })

  const handleSubmit = async (
    values: ILoginFormValues,
    { setErrors }: TFormikHelpers
  ) => {
    const response = await client.post<ILoginResponse>("/users/login", {
      data: values
    })

    if (!response.data) return

    const { user, invalidEmail, invalidPassword } = response.data
    if (!response.ok) {
      if (invalidEmail) setErrors({ email: "Invalid email" })
      else if (invalidPassword) setErrors({ password: "Invalid password" })
      return
    }

    setUser(user ?? null)

    if (user.isPlatformAdmin) {
      navigation.navigate(routes.PLATFORM_ADMIN_OR_USER)
    } else {
      navigation.navigate(routes.OPENING)
    }
  }

  return (
    <SC.LoginPageLayout title="Login" color="background">
      <SC.LoginBox color="foreground">
        <SC.Title>Login to your account</SC.Title>
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <SC.LoginField name="email" placeholder="Email" />
          <SC.LoginField
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Link url={routes.FORGOT_PASSWORD} displayText="Forgot password?" />
          <SC.LoginButton title="Login" />
          <SC.RegisterText>
            Don't have an account?{" "}
            <Link url={routes.REGISTER} displayText="Sign up" />
          </SC.RegisterText>
        </Form>
      </SC.LoginBox>
    </SC.LoginPageLayout>
  )
}

export default LoginPage
