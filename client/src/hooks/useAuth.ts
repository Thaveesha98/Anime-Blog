import axios, { AxiosResponse } from "axios";
const auth_url = `${process.env.REACT_APP_API_URL}/auth`;

interface RegisterResponse {
  isError: boolean;
  user?: {
    id: string;
    email: string;
    username: string;
  };
  message: string;
}
interface RegProp {
  email: string;
  username: string;
  password: string;
}

export const Register = async ({
  email,
  username,
  password,
}: RegProp): Promise<RegisterResponse | undefined> => {
  try {
    const Response: AxiosResponse<RegisterResponse> = await axios.post(
      `${auth_url}/register`,
      {
        email,
        username,
        password,
      }
    );
    return Response.data;
  } catch (err) {
    console.error("Failed to register user", err);
  }
};

// export const Login = () => {
//   return async (email: string, password: string) => {
//     try {
//       const response = await axios.post(`${AUTH_API_URL}/login`, {
//         email,
//         password,
//       });
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };
