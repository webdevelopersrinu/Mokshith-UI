import { FaRegBell, FaRegCreditCard, FaSearch, FaRegListAlt, FaRegStickyNote, FaRegUser, FaRegCheckCircle, FaCopy } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

const sidebarItems = [
    { name: "Buttons", icon: <FaRegCheckCircle />, route: "/components" },
    { name: "Forms", icon: <FaRegUser />, route: "/components/forms" },
    { name: "Cards", icon: <FaRegCreditCard />, route: "/components/cards" },
    { name: "Modals", icon: <FaRegStickyNote />, route: "/components/modals" },
    { name: "Badges", icon: <FaRegListAlt />, route: "/components/badges" },
    { name: "Alerts", icon: <FaRegBell />, route: "/components/alerts" },
    { name: "Navigation", icon: <FaRegStickyNote />, route: "/components/navigation" },
];

const Sidebar = () => {
    return (
        <div className="w-52 h-screen bg-white  text-gray-900 p-4 border-r border-gray-200  flex flex-col">
            <h2 className="text-lg font-bold mb-4">Components</h2>
            {/* <div className="relative mb-4">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full pl-10 pr-3 py-2 border rounded-md text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
            </div> */}
            <div className="flex flex-col space-y-2">
                {sidebarItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.route}
                        className={({ isActive }) =>
                            `flex justify-between items-center p-2 rounded-lg transition-all font-medium text-gray-700 ${isActive ? "bg-blue-50 !text-blue-600" : "hover:bg-gray-100"}`
                        }
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-lg ">{item.icon}</span>
                            <span>{item.name}</span>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1  overflow-y-scroll " >
                <Outlet />
            </div>
        </div>
    );
};

export default Index;
