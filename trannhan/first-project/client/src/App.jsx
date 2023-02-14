import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";

import theme from "./configs/theme.config";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./components/layouts/AuthLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AuthProtect from "./components/common/AuthProtect";
// import userApi from "./api/modules/user.api";
// import { setUser } from "./redux/features/userSlice";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const authUser = async () => {
  //     const { response, error } = await userApi.getUser();
  //     if (response) dispatch(setUser(response));
  //     if (error) dispatch(setUser(null));
  //   };
  //   const actkn = localStorage.getItem("actkn");
  //   if (actkn) authUser();
  // }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signin"
            element={
              <AuthLayout heading="Sign In">
                <SignIn />
              </AuthLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout heading="Sign Up">
                <SignUp />
              </AuthLayout>
            }
          />
          <Route
            path="/admin"
            element={
              <AuthProtect>
                <AdminLayout />
              </AuthProtect>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
