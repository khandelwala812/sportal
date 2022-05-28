import React, { FC } from "react"
import Modal from "modal-enhanced-react-native-web"

// import * as SC from "./styles"
import useModal from "../../hooks/useModal"

interface IModalLayoutProps {
  name: string
}

const ModalLayout: FC<IModalLayoutProps> = ({ name, children, ...props }) => {
  const { toggleModal, isOpen } = useModal()

  const handleToggle = () => {
    toggleModal(name)
    console.log(name)
  }

  return (
    <Modal
      isVisible={isOpen(name)}
      onBackdropPress={handleToggle}
      animationIn="zoomIn"
      animationOut="zoomOut"
      {...props}
    >
      {children}
      {/* <SC.Cross onPress={handleToggle} /> */}
    </Modal>
  )
}

export default ModalLayout
