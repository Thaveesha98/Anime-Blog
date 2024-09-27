import { Request, Response } from "express";
import AuthService from "../services/authService";

const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const user = await AuthService.register(
        req.body.email,
        req.body.username,
        req.body.password
      );
      res.status(200).json({
        isError: false,
        message: "User registered successfully",
        user,
      });
    } catch (error: any) {
      res.status(404).json({
        isError: true,
        message: error.message,
      });
    }
  },

  // login: async (req: Request, res: Response) => {
  //   try {
  //     const { token } = await AuthService.login(
  //       req.body.username,
  //       req.body.password
  //     );
  //     res.json({ token });
  //   } catch (error: any) {
  //     res.status(401).json({ message: error.message });
  //   }
  // },
};

export default AuthController;
