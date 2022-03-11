import React, { FC } from "react"
import * as Yup from "yup"
import { useNavigation } from "@react-navigation/native"

import { IUser, TFormikHelpers } from "../../types"
import * as SC from "./styles"
import client from "../../api/client"
import routes from "../../config/routes"
import useAuth from "../../hooks/useAuth"
import BoxLayout from "../../layouts/BoxLayout"
import FormField from "../../components/FormField"

interface IValidateCodePageProps {
  route: {
    params: {
      email: string
    }
  }
}

interface IValidateCodeFormValues {
  validationCode: string
}

interface IValidateCodeResponse {
  email: IUser["email"]
  isPlatformAdmin: IUser["isPlatformAdmin"]
}

const initialValues = {
  validationCode: ""
}

const ValidateCodePage: FC<IValidateCodePageProps> = ({ route }) => {
  const navigation = useNavigation()
  const { setUser } = useAuth()
  const { email } = route.params
  const validationSchema = Yup.object().shape({
    validationCode: Yup.string().required("").label("Validation code")
  })

  const handleSubmit = async (
    { validationCode }: IValidateCodeFormValues,
    { setErrors }: TFormikHelpers
  ) => {
    const response = await client.post<IValidateCodeResponse>(
      "/users/validate-code",
      {
        data: {
          email,
          validationCode: Number(validationCode)
        }
      }
    )

    if (response.ok && response.data) {
      setUser(response.data)
      navigation.navigate(routes.OPENING)
    } else {
      setErrors({ validationCode: "Invalid code" })
    }
  }

  return (
    <BoxLayout
      title="Validate Code"
      head={
        <SC.Title>
          A verification code has been sent to {email}. Use it to verify your
          account below.
        </SC.Title>
      }
      isForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField name="validationCode" placeholder="Enter your code" />
      <SC.VerifyButton title="Verify" />
    </BoxLayout>
  )
}

export default ValidateCodePage
