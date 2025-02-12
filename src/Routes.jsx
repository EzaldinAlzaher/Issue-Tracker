import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Pages/Home";
import SignIn from "../src/Pages/SignIn";
import SignUp from "../src/Pages/SignUp";
import AddIssue from "../src/Pages/AddIssue";
import EditIssue from "../src/Pages/EditIssue";
import NotFoundPage from "../src/Pages/NotFoundPage";
import AuthRoute from "./AuthRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addIssue", element: <AddIssue /> },
      { path: "/editIssue", element: <EditIssue /> },
    ],
  },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
