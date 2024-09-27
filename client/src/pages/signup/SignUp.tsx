import { useState } from "react";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import { Register } from "../../hooks/useAuth";
import * as Yup from "yup";

const SignUp = () => {
  interface FormData {
    name: string;
    email: string;
    password: string;
  }

  const [userData, setUserData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate user data with Yup
      await validationSchema.validate(userData, { abortEarly: false });
      setErrors({}); // Clear errors on successful validation

      // Call the Register function
      const response = await Register({
        email: userData.email,
        username: userData.name,
        password: userData.password,
      });

      console.log("response", response);

      if (response?.isError || response === undefined) {
        console.error("Registration failed:", response?.message);
      } else {
        console.log("User registered successfully:", response?.user);
        setUserData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Create a new errors object
        const newErrors: Partial<FormData> = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof FormData] = error.message;
          }
        });
        setErrors(newErrors); // Set validation errors
      }
    }
  };

  return (
    <>
      {/* Background Image */}
      <img
        src="assets/anime-land.png"
        alt="Anime Land"
        className="w-[100vw] h-[100dvh] absolute -z-10"
      />

      {/* signup form */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6">
        <div>
          <CustomInput
            name="name"
            type="text"
            label={"Name"}
            placeholder="Enter your Name"
            value={userData.name}
            onChange={handleValueChange}
          />
          {errors?.name && <p className="text-red-400">{errors.name}</p>}
        </div>
        <div>
          <CustomInput
            name="email"
            type="email"
            label={"Email"}
            placeholder="Enter your Email"
            value={userData.email}
            onChange={handleValueChange}
          />
          {errors?.email && <p className="text-red-400">{errors.email}</p>}
        </div>
        <div>
          <CustomInput
            name="password"
            type="password"
            label={"Password"}
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleValueChange}
          />
          {errors?.password && (
            <p className="text-red-400">{errors.password}</p>
          )}
        </div>
        <div className="flex justify-center">
          <CustomButton type={"submit"} text="SignUp" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
