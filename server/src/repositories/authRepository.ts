import User from "../models/userModel";

const AuthRepository = {
  createUser: async (email: string, username: string, password: string) => {
    return User.create({ email, username, password });
  },

  findUserByUsername: async (username: string) => {
    return User.findOne({ where: { username } });
  },
};

export default AuthRepository;
