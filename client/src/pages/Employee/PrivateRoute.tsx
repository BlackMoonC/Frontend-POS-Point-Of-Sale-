import { Navigate } from "react-router-dom";
import Layout from "./layout";
import { useSelector } from "react-redux";
import { selectToken } from "../../features/login/authSlice";

export default function index() {
  const token: string | null = useSelector(selectToken);
  return token ? <Layout /> : <Navigate to="/login" replace />;
  // return <Layout />;
}
