import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveBlog from "./pages/ResponsiveBlog.jsx";
import Blog2 from "./pages/Blog2";
import RecLand from "./pages/RecLand.jsx";
import theme from "./configs/theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/blog" element={<ResponsiveBlog />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/land" element={<RecLand />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
