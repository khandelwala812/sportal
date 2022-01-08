import React, { FC, createContext, useState, useMemo } from "react"

export interface IModalContext {
  isOpen: (modal: string) => void
  toggleModal: (modal: string) => void
}

export const ModalContext = createContext<IModalContext | null>(null)

export const ModalProvider: FC = ({ children }) => {
  const [current, setCurrent] = useState<string | null>(null)

  const isOpen = (modal: string) => current === modal

  const toggleModal = (modal: string) => {
    setCurrent(isOpen(modal) ? null : modal)
  }

  const memoizedContextValue = useMemo(
    () => ({
      isOpen,
      toggleModal
    }),
    [current]
  )

  return (
    <ModalContext.Provider value={memoizedContextValue}>
      {children}
    </ModalContext.Provider>
  )
}
