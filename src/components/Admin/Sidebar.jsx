export default function Sidebar({ active, setActive }) {
  const links = ["Dashboard", "Courses", "Add Course", "Orders", "Settings"];

  return (
    <div className="w-64 bg-gray-900 text-white p-5 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <ul className="space-y-4">
        {links.map(link => (
          <li
            key={link}
            onClick={() => setActive(link)}
            className={`cursor-pointer hover:text-blue-400 ${
              active === link ? "text-blue-400" : ""
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
