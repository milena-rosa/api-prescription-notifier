interface IUserTokenDTO {
  user_id: string
  expires_at: Date
  refresh_token: string
}

export { IUserTokenDTO }
