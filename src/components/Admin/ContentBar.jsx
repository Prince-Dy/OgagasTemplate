import AddCourseForm from "./AddCourseForm"; // Make sure path matches

export default function ContentArea({ section }) {
  switch (section) {
    case "Dashboard":
      return <div className="p-6">📊 Welcome to the Admin Dashboard</div>;
    case "Courses":
      return <div className="p-6">📘 All Courses will be listed here</div>;
    case "Add Course":
      return (
        <div className="p-6">
          <AddCourseForm />
        </div>
      );
    case "Orders":
      return <div className="p-6">🧾 Customer Orders Overview</div>;
    case "Settings":
      return <div className="p-6">⚙️ Admin Settings</div>;
    default:
      return <div className="p-6">Unknown Section</div>;
  }
}
