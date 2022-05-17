interface IModals {
  [key: string]: string
}

export default Object.freeze({
  REGISTER_EVENT: "register-event",
  SEARCH: "search",
  UNREGISTER_EVENT: "unregister-event",
  UPLOAD_VIDEO: "upload-video"
}) as IModals
