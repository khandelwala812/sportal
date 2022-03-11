import React, { FC, Fragment, useState } from "react"
import * as Yup from "yup"

import * as SC from "./styles"
import client from "../../api/client"
import Form from "../../components/Form"
import FormField from "../../components/FormField"

interface IPasswordFormValues {
  email: string
}

const initialValues = {
  email: ""
}

const ForgotPasswordPage: FC = () => {
  const [email, setEmail] = useState<string>()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email")
  })

  const handleSubmit = async ({ email }: IPasswordFormValues) => {
    const response = await client.get(`/users/forgot-password?email=${email}`)

    if (response.ok) {
      setEmail(email)
    }
  }

  return (
    <SC.PasswordPageLayout title="Forgot Password" color="background">
      <SC.PasswordBox color="foreground">
        {email ? (
          <SC.Subtitle>
            A email has been sent to <SC.Bold>{email}</SC.Bold>. Follow the
            instructions to reset your account's password.
          </SC.Subtitle>
        ) : (
          <Fragment>
            <SC.Title>Enter your email</SC.Title>
            <Form
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <FormField name="email" placeholder="Email" />
              <SC.ResetButton title="Reset Password" />
            </Form>
          </Fragment>
        )}
      </SC.PasswordBox>
    </SC.PasswordPageLayout>
  )
}

export default ForgotPasswordPage
