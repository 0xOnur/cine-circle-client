import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RegisterLayout = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return isAuth ? <Navigate to="/" /> : <div>Register Layout</div>;
};

export default RegisterLayout;
