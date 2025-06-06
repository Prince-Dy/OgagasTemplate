import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;