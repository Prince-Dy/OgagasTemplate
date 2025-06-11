import { useState } from "react";
import axios from "axios";
export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tiers, setTiers] = useState([
    { title: "Basic", price: "", features: [""], file: null },
    { title: "Standard", price: "", features: [""], file: null },
    { title: "Pro", price: "", features: [""], file: null },
  ]);

  const handleTierChange = (index, field, value) => {
    const updatedTiers = [...tiers];
    updatedTiers[index][field] = value;
    setTiers(updatedTiers);
  };

  const handleFeatureChange = (tierIndex, featureIndex, value) => {
    const updatedTiers = [...tiers];
    updatedTiers[tierIndex].features[featureIndex] = value;
    setTiers(updatedTiers);
  };

  const addFeature = (index) => {
    const updatedTiers = [...tiers];
    updatedTiers[index].features.push("");
    setTiers(updatedTiers);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    tiers.forEach((tier, idx) => {
      formData.append(`tiers[${idx}][title]`, tier.title);
      formData.append(`tiers[${idx}][price]`, tier.price);
      tier.features.forEach((feature, fIdx) => {
        formData.append(`tiers[${idx}][features][${fIdx}]`, feature);
      });
      if (tier.file) {
        formData.append(`tiers[${idx}][file]`, tier.file);
      }
    });

    try {
      await axios.post("http://localhost:5000/api/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Course uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">Course Title</label>
          <input
            type="text"
            className="w-full border p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1">Course Description</label>
          <textarea
            className="w-full border p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <h3 className="text-xl font-semibold">Tiers</h3>
        {tiers.map((tier, index) => (
          <div key={index} className="border p-4 rounded mb-4 bg-gray-50">
            <label className="block font-bold mb-1">{tier.title}</label>
            <input
              type="text"
              className="w-full mb-2 border p-2"
              placeholder="Price"
              value={tier.price}
              onChange={(e) => handleTierChange(index, "price", e.target.value)}
              required
            />
            <div className="mb-2">
              <label className="block mb-1">ZIP file for this tier</label>
              <input
                type="file"
                accept=".zip"
                onChange={(e) =>
                  handleTierChange(index, "file", e.target.files[0])
                }
              />
            </div>
            <div>
              <label className="block mb-1">Features</label>
              {tier.features.map((feature, fIdx) => (
                <input
                  key={fIdx}
                  type="text"
                  className="w-full mb-1 border p-2"
                  placeholder={`Feature ${fIdx + 1}`}
                  value={feature}
                  onChange={(e) =>
                    handleFeatureChange(index, fIdx, e.target.value)
                  }
                />
              ))}
              <button
                type="button"
                className="text-sm text-blue-600"
                onClick={() => addFeature(index)}
              >
                + Add Feature
              </button>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-secondary text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Upload Course
        </button>
      </form>
    </section>
  );
}
