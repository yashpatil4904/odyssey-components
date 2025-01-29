import Sidebar, { SidebarItem } from "./components/Sidebar";
import Navigation from "./components/Navigation"
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

function App() {
  return (
    <>
    {/* <Navigation/> */}
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />  {/*it will show the red dot which are alert*/}
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" active />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
      <div className="flex-1 ml-64 transition-width duration-300 ease-in-out">
        {/* Main content goes here */}
        <h1 className="p-4 text-2xl font-semibold">Main Content</h1>
      </div>
    </div>

    </>
  );
}

export default App;