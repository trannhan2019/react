import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import theme from "./config/theme.config";
import MainLayout from "./components/layouts/MainLayout";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage/>}/>
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
