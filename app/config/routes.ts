interface IRoutes {
  [key: string]: string
}

export default Object.freeze({
  OPENING: "opening",
  AUTH: "auth",
  LOGIN: "login",
  REGISTER: "register",
  VALIDATE_CODE: "validate-code",
  HOME: "home",
  CLUB: "club",
  EVENTS: "events",
  FORGOT_PASSWORD: "forgot-password",
  RESET_PASSWORD: "reset-password",
  PLATFORM_ADMIN_OR_USER: "platform-admin-or-user",
  PLATFORM_ADMIN: "platform-admin",
  VIDEOS: "videos",
  ARTICLES: "articles",
  FIND_A_CLUB: "find-a-club",
  BROWSE: "browse",
  BROWSE_ARTICLES: "browse-articles",
  READ_ARTICLE: "read-article",
  REVIEW_VIDEO: "review-video"
}) as IRoutes
