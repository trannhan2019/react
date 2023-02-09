import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./configs/theme.configs";
import SigninSimple from "./pages/SigninSimple";
import SignInSide from "./pages/SignInSide";
import AlbumPage from "./pages/AlbumPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SigninSimple />} />
          <Route path="/signin-slide" element={<SignInSide />} />
          <Route path="/album" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
