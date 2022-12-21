export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iFormRegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

export interface iFormLoginData {
  email: string;
  password: string;
}

export interface iUserState {
  email: string;
  name: string;
  id: number;
  password?: string;
}

export interface iLoginRegisterResponse {
  accessToken: string;
  user: iUserState;
}

export interface iErrorData {
  data: string;
}

export interface iErrorResponse {
  response: iErrorData;
}
