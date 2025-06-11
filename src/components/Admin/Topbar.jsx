export default function TopBar({ title }) {
  return (
    <div className="bg-white px-6 py-4 border-b shadow">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    </div>
  );
}
