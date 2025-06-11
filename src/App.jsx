import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetails";
import Payments from "./pages/Payments";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/payment" element={<Payments  />} />
      <Route path="/course" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;
