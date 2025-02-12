import { Navigate } from "react-router-dom";
import Layout from "./Layout";

export default function AuthRoute() {
  // Check if Token is Present in Local Storage
  return localStorage.getItem("token") ? <Layout /> : <Navigate to="/signIn" />;
}
