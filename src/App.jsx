import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;
