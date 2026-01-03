
export enum AppState {
  LAUNCH = 'LAUNCH',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  AI_CHAT = 'AI_CHAT'
}

export interface UserSession {
  isLoggedIn: boolean;
  username?: string;
}
