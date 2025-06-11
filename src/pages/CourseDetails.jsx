import { useParams } from "react-router-dom";
import courses from "../data/Courses.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../utils/PaymentContext";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  const navigate = useNavigate();
  const { setPaymentData } = usePayment();

  const handleBuy = (tier) => {
    setPaymentData({
      courseTitle: course.title,
      tierName: tier.title,
      price: tier.price,
    });
    navigate("/payment");
  };

  if (!course) return <p>Course not found.</p>;

  return (
    <>
      <Header />
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">{course.title}</h2>
        <p className="text-gray-600 mb-8">{course.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {course.tiers.map((tier, index) => (
            <div key={index} className="bg-[#f1eded] p-6   ">
              <h3 className="text-2xl font-semibold mb-2 text-secondary">
                {tier.title}
              </h3>
              <p className="text-xl font-medium mb-4">{tier.price}</p>
              <ul className="list-disc list-inside text-left text-gray-700 mb-6">
                {tier.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleBuy(tier)}
                className="course-btn bg-secondary text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className=" mx-15 font-monts how-to border p-5 flex flex-col gap-2">
        <h2 className="font-bold font-monts ">HOW TO</h2>
        <ul className="list-disc flex flex-col gap-3">
          <li>Click on buy to proceed to the payment page</li>
          <li>Fill your Biller information along with your email</li>
          <li>
            After Payment, An email with your purchase course will be sent to
            you in a zip file
          </li>
          <li>
            Use an extractor (E. g{" "}
            <a href="#" className="text-secondary underline">
              Zarchiever
            </a>
            ) to extract content
          </li>
          <li>
            If your device already has an extractor, simply click to extract
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
