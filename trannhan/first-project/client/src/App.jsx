import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./configs/theme.config";

import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./components/layouts/AuthLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AdminProtect from "./components/common/AdminProtect";

function App() {
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
              <AdminProtect>
                <AdminLayout />
              </AdminProtect>
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
