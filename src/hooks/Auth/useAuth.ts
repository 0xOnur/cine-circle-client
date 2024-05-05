import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@redux/config/store";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { updateAccessToken } from "@api/user.api";
import { logoutUser } from "@redux/slices/user.slice";


export const useAuth = () => {
  const reduxUser = useSelector((state: RootState) => state);
  const dispatch: AppDispatch = useDispatch();

  const accessToken = reduxUser.accessToken;
  const refreshToken = reduxUser.refreshToken;

  useEffect(() => {
    if (accessToken && refreshToken) {
      const decoded = jwtDecode<IDecoded>(accessToken);
      console.log(decoded);
      
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        dispatch(updateAccessToken()).then((res) => {
          if (res.meta.requestStatus === "rejected") {
            dispatch(logoutUser());
          }
        });
      }
    }
  }, [dispatch, refreshToken, accessToken]);
};
