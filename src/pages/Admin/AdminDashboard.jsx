import { useState } from "react";


import Sidebar from "../../components/Admin/Sidebar";
import TopBar from "../../components/Admin/Topbar";
import ContentArea from "../../components/Admin/ContentBar";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Pane - Sidebar */}
      <Sidebar active={activeSection} setActive={setActiveSection} />

      {/* Right Pane */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Top Pane - Page Info */}
        <TopBar title={activeSection} />

        {/* Bottom Pane - Main Content */}
        <ContentArea section={activeSection} />
      </div>
    </div>
  );
}
