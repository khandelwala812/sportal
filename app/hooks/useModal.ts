import { useContext } from "react"

import { ModalContext } from "../ModalProvider"

const useModal = () => {
  const modalContext = useContext(ModalContext)

  if (!modalContext) {
    throw Error("Need context")
  }

  return modalContext
}

export default useModal
