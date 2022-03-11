import React, { FC } from "react"
import { FormikHelpers } from "formik"
import * as Yup from "yup"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import client from "../../api/client"
import routes from "../../config/routes"
import Form from "../../components/Form"

interface IRegisterFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
}

interface IRegisterResponse {
  emailAlreadyInUse: boolean
}

type TFormikHelpers = FormikHelpers<{
  [key: string]: string
}>

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: ""
}

const RegisterPage: FC = () => {
  const navigation = useNavigation()
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First name"),
    lastName: Yup.string().required().label("Last name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(8).required().label("Password"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords don't match.")
      .label("Confirm password"),
    phoneNumber: Yup.string().required().label("Phone number")
  })

  const handleSubmit = async (
    { confirmPassword, ...values }: IRegisterFormValues,
    { setErrors }: TFormikHelpers
  ) => {
    const response = await client.post<IRegisterResponse>("/users/register", {
      data: values
    })

    if (response.ok)
      return navigation.navigate(routes.VALIDATE_CODE, { email: values.email })

    if (response?.data?.emailAlreadyInUse) {
      setErrors({ email: "Email already in use" })
    }
  }

  return (
    <SC.RegisterPageLayout title="Register" color="background">
      <SC.RegisterBox color="foreground">
        <SC.Title>Make an account</SC.Title>
        <Form
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <SC.Field name="firstName" placeholder="First Name" />
          <SC.Field name="lastName" placeholder="Last Name" />
          <SC.Field name="email" placeholder="Email" />
          <SC.Field name="password" placeholder="Password" secureTextEntry />
          <SC.Field
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
          />
          <SC.Field name="phoneNumber" placeholder="Phone Number" />
          <SC.RegisterButton title="Register" />
        </Form>
      </SC.RegisterBox>
    </SC.RegisterPageLayout>
  )
}

export default RegisterPage
