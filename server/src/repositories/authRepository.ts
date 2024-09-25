import User from "../models/userModel";

const AuthRepository = {
  // Create a new user in the database
  createUser: async (email: string, username: string, password: string) => {
    return User.create({ email, username, password });
  },

  // Find a user by email
  //   findUserByUsername: async (username: string) => {
  //     return User.findOne({ where: { username } });
  //   },
};

export default AuthRepository;
