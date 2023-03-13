import { Response, Request, NextFunction } from "express";
import { asyncHandler } from "@lib";
import { AuthSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

interface ConstructorParams {
  authService: AuthService;
}

export class AuthController {
  authService: AuthService;

  constructor({ authService }: ConstructorParams) {
    this.authService = authService;
  }

  signin = asyncHandler(async (req, res) => {
    const dto: AuthSchema = req.body;
    this.authService.signin(dto);

    res.json({ message: "signin" });
  });

  signup = asyncHandler(async (req: Request, res: Response) => {
    const dto: AuthSchema = req.body;

    this.authService.signup(dto);

    res.json({ message: "signup" });
  });

  logout = asyncHandler(async (req: Request, res: Response) => {
    this.authService.logout();

    res.json({ message: "logout" });
  });
}
