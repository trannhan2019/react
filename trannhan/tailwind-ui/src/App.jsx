import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
