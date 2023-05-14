import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import CharacterInfo from "../pages/CharacterInfo";
import CharacterCard from "../components/Character";
import LoginForm from "../components/LoginForm";
import Character from '../components/Character';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <NotFound />,
      },
      {
        path: "/characters",
        element: <Characters />,
        errorElement: <NotFound />,
      },
      {
        path: "/characters/:uuid",
        element: <CharacterInfo />,
        errorElement: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
      },
      {
        path: "/",
      },
    ],
  },
]);
