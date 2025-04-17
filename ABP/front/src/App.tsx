import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página Home */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Página Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
