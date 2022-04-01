interface IModals {
  [key: string]: string
}

export default Object.freeze({
  REGISTER_EVENT: "register-event",
  SEARCH: "search",
  UNREGISTER_EVENT: "unregister-event"
}) as IModals
