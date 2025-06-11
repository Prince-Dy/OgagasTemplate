
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../utils/PaymentContext";
;

export default function Payment() {
  const { paymentData } = usePayment();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!paymentData) return <p>No payment data found. Please select a course tier.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate success
    console.log("Submitting Payment:", {
      ...formData,
      ...paymentData,
    });

    alert("Payment simulated! Email delivery will be set up later.");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-10 border shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-6">Payment for {paymentData.courseTitle}</h2>

      <p className="mb-4 text-lg">
        Tier: <strong>{paymentData.tierName}</strong><br />
        Price: <strong>₦{paymentData.price}</strong>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-secondary text-white p-2 rounded hover:bg-blue-700"
        >
          Proceed to Pay with Remita
        </button>
      </form>
    </div>
  );
}
