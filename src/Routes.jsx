import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./Components/ErrorElement.jsx";
import AuthRoute from "./Components/AuthRoute.jsx";
import Home from "./Pages/Home.jsx";
import AddIssue from "./Pages/AddIssue.jsx";
import EditIssue from "./Pages/EditIssue.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    element: <AuthRoute />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <AddIssue /> },
      { path: "/edit", element: <EditIssue /> },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
]);

export default router;
