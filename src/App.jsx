import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserAuth from "./pages/UserAuth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import MuscleBreakdown from "./Calculators/MuscleBreakdown";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <UserAuth />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/musclebreakdown",
      element: <MuscleBreakdown/>,
    },
  ]);

  const theme = {
    breakpoints: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  };

  return (
    <div className="App text-white">
      <ThemeProvider theme={theme}>
        <RouterProvider router={route} />
      </ThemeProvider>
    </div>
  );
}

export default App;
