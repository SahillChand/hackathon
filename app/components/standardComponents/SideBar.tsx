"use client";
import {
  FiMenu,
  FiX,
  FiHome,
  FiSettings,
  FiList,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";
const Sidebar: React.FC<{
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}> = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-4 transition-all z-50 duration-400 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <button
        className="text-white p-2 rounded-md hover:bg-gray-700 transition mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        <Link href={""}>
          <SidebarItem
            icon={<FiHome />}
            text="Dashboard"
            isExpanded={isExpanded}
          />
        </Link>
        <Link href={""}>
          <SidebarItem
            icon={<FiList />}
            text="Issues"
            isExpanded={isExpanded}
          />
        </Link>
        <Link href={""}>
          <SidebarItem
            icon={<FiUser />}
            text="Profile"
            isExpanded={isExpanded}
          />
        </Link>
        <Link href={""}>
          <SidebarItem
            icon={<FiSettings />}
            text="Settings"
            isExpanded={isExpanded}
          />
        </Link>
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem: React.FC<{
  icon: JSX.Element;
  text: string;
  isExpanded: boolean;
}> = ({ icon, text, isExpanded }) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
      {icon}
      {isExpanded && <span className="text-white">{text}</span>}
    </div>
  );
};

export default Sidebar;
