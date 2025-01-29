import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard"); // Default active item

  return (
     <SidebarContext.Provider value={{ expanded, activeItem, setActiveItem }}>
      <aside className={`h-screen ${expanded ? "w-60" : "w-16"} transition-all duration-300 bg-gray-900 text-white`}>
        <nav className="h-full flex flex-col border-r border-gray-700 shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`transition-all ${expanded ? "w-32" : "w-0 hidden"}`}
              alt="Logo"
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <ul className="flex-1 px-2 space-y-1">{children}</ul>

          <div className="border-t border-gray-700 flex items-center p-3 mt-auto">
            <img
              src="https://ui-avatars.com/api/?background=374151&color=fff&bold=true"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 hidden"}`}>
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-400">johndoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
export function SidebarItem({ icon, text, alert }) {
    const { expanded, activeItem, setActiveItem } = useContext(SidebarContext);
  
    return (
      <li
        onClick={() => setActiveItem(text)}
        className={`relative flex items-center py-2 px-3 rounded-md cursor-pointer transition-all
          ${activeItem === text ? "bg-indigo-600 text-white" : "hover:bg-gray-800 text-gray-300"}
        `}
      >
        {icon}
        <span className={`transition-all ${expanded ? "ml-3" : "hidden"}`}>{text}</span>
    
        {alert && <div className="absolute right-2 w-2 h-2 rounded-full bg-red-500" />}
        {!expanded && (
          <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 transition-opacity group-hover:opacity-100">
            {text}
          </div>
        )}
      </li>
    );
  }
  