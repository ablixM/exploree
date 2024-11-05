// authService.ts
import { postRequest } from "./apiClient";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: { id: string; name: string };
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return postRequest<LoginRequest, LoginResponse>("/login", data);
};
