import { useFormikContext } from "formik"
import React, { FC } from "react"

import Button from "../Button"

interface ISubmitButtonProps {
  title: string
}

const SubmitButton: FC<ISubmitButtonProps> = ({ title, ...props }) => {
  const { handleSubmit } = useFormikContext()

  return <Button title={title} onPress={handleSubmit} {...props} />
}

export default SubmitButton
