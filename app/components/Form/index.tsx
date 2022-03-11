import React, { FC } from "react"
import { Formik } from "formik"
import * as Yup from "yup"

interface IFormProps {
  initialValues: {
    [key: string]: string
  }
  onSubmit: (values: any, formikHelpers: any) => void
  validationSchema: Yup.AnyObjectSchema
}

const Form: FC<IFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

export default Form
