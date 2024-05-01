import SignUpPage from "@components/Auth/SignUp";
import Navbar from "@components/Navbar";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RegisterLayout = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <>
      <Navbar isAuth={isAuth} />
      <SignUpPage />
    </>
  );
};

export default RegisterLayout;
