import { useParams } from "react-router-dom";
import courses from "../data/courses.json";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) return <p>Course not found.</p>;

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">{course.title}</h2>
      <p className="text-gray-600 mb-8">{course.description}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {course.tiers.map((tier, index) => (
          <div key={index} className="bg-white p-6 shadow rounded-xl border">
            <h3 className="text-2xl font-semibold mb-2 text-secondary">{tier.title}</h3>
            <p className="text-xl font-medium mb-4">{tier.price}</p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-6">
              {tier.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
