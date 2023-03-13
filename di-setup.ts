import { asClass, createContainer, InjectionMode } from "awilix";
import { AuthController } from "./src/modules/auth/auth.controller";
import { AuthService } from "./src/modules/auth/auth.service";

export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

export const setup = () => {
  container.register({
    authController: asClass(AuthController),

    authService: asClass(AuthService),
  });
};