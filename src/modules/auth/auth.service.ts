import { AuthSchema } from "./auth.schema";

export class AuthService {
  signin(dto: AuthSchema) {
    //some bussiness logic
  }

  signup(dto: AuthSchema) {}

  logout() {}
}
