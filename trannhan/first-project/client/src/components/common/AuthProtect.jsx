import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthProtect({ children }) {
  const { user } = useSelector((state) => state.user);

  return user ? children : <Navigate to="/signin" replace />;
}
