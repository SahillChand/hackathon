"use client";
import { useState } from "react";
import Sidebar from "./standardComponents/SideBar";
import IssueTable from "./standardComponents/IssueTable";

const Layout: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Content */}
      <div className={` flex-1 transition-all ${"ml-16"}`}>
        <IssueTable />
      </div>
    </div>
  );
};

export default Layout;
