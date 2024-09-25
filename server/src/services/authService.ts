import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthRepository from "../repositories/authRepository";

const AuthService = {
  register: async (email: string, username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return AuthRepository.createUser(email, username, hashedPassword);
  },

  // login: async (username: string, password: string) => {
  //     const user = await AuthRepository.findUserByUsername(username);
  //     if (!user || !await bcrypt.compare(password, user.password)) {
  //         throw new Error('Invalid username or password');
  //     }
  //     const token = AuthService.generateToken(user.id);
  //     return { token };
  // },

  // generateToken: (userId: number) => {
  //     return jwt.sign({ id: userId }, process.env.JWT_SECRET!, { expiresIn: '10h' });
  // },
};

export default AuthService;
