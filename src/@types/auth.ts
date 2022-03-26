export interface Auth {
  id?: string;
  active?: boolean;
  app?: string;
  email?: string;
  password?: string;
  code?: number;
  user?: string;
  accessToken?: string;
  refreshToken?: string;
}
