export interface AuthSuccessResponse {
  accessToken: string;
}

export type AuthLogin = (
  email: string,
  password: string
) => Promise<AuthSuccessResponse | undefined>;

export type AuthLogout = () => void;

export interface AuthContextState {
  authenticated: boolean;
  login: AuthLogin;
  logout: AuthLogout;
}
