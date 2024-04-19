import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./layout";
import { selectToken } from "../../features/login/authSlice";

export default function index() {
  const token: string | null = useSelector(selectToken);
  // return token ? <Layout /> : <Navigate to="/login" replace />;
  return <Layout />;
}
