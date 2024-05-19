import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginPage from "@components/Auth/Login";
import Navbar from "@components/Navbar";

const LoginLayout = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <>
      <Navbar isAuth={isAuth} />
      <LoginPage />
    </>
  );
};

export default LoginLayout;
