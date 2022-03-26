export interface User {
  id?: string;
  active?: boolean;
  app?: string;
  cpf?: string;
  email?: string;
  name?: string;
  password?: string;
  job?: string;
  code?: number;
  consents?: {
    terms: boolean;
    privacy: boolean;
  };
  userId?: string;
  accessToken?: string;
  refreshToken?: string;
}
