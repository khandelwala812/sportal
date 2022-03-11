import React, { FC } from "react"
import { useFormikContext } from "formik"

import * as SC from "./styles"
import ErrorMessage from "../ErrorMessage"

interface IFormFieldProps {
  name: string
}

const FormField: FC<IFormFieldProps> = ({ name, ...props }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <SC.FieldWrapper>
      <SC.TextField
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </SC.FieldWrapper>
  )
}

export default FormField
