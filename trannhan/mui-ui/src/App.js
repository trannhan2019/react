import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveBlog from "./pages/ResponsiveBlog.jsx";
import Blog2 from "./pages/Blog2";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<ResponsiveBlog />} />
          <Route path="/blog2" element={<Blog2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
