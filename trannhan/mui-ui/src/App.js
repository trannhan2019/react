import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveBlog from "./pages/ResponsiveBlog.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<ResponsiveBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
