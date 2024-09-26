import axios from "axios";
const AUTH_API_URL = `${process.env.REACT_APP_API_URL}/auth`;

export const SignUp = () => {
  return async (email: string, name: string, password: string) => {
    try {
      const response = await axios.post(`${AUTH_API_URL}/register`, {
        email,
        name,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
};
