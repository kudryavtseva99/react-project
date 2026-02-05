import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const withAuthRedirect = (Component) => {
  function RedirectComponent(props) {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (!isAuth) return <Navigate to="/login" replace />;
    return <Component {...props} />;
  }

  return RedirectComponent;
};
