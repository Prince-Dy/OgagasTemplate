import courses from "../data/courses.json";
import { Link } from "react-router-dom";

export default function CourseList() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Available Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 shadow rounded-lg">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              to={`/course/${course.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
