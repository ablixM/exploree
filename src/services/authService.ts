// authService.ts
import { APIClient } from "./api-client.ts";

// interface LoginRequest {
//   email: string;
//   password: string;
// }
//
// export interface SignupData {
//   fullName: string;
//   email: string;
//   password: string;
//   phoneNumber?: string;
// }
//
// interface LoginResponse {
//   token: string;
//   user: { id: string; name: string };
// }
//
// interface SignUpResponse {
//   token: string;
//   user: { id: string; name: string };
// }

export const loginClient = new APIClient<{ email: string; password: string }>(
  "login",
);
export const signupClient = new APIClient<{
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
}>("signup");
