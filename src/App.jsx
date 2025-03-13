import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
