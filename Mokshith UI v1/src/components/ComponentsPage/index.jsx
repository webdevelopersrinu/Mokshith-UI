import { FaRegBell, FaRegCreditCard, FaSearch, FaRegListAlt, FaRegStickyNote, FaRegUser, FaRegCheckCircle, FaCopy } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

const sidebarItems = [
    { name: "Buttons", icon: <FaRegCheckCircle />, route: "/components/buttons" },
    // { name: "Forms", icon: <FaRegUser />, route: "/components/forms" },
    { name: "Cards", icon: <FaRegCreditCard />, route: "/components/cards" },
    { name: "Inputs", icon: <FaRegStickyNote />, route: "/components/inputs" },
    // { name: "Badges", icon: <FaRegListAlt />, route: "/components/badges" },
    // { name: "Alerts", icon: <FaRegBell />, route: "/components/alerts" },
    // { name: "Navigation", icon: <FaRegStickyNote />, route: "/components/navigation" },
];

const Sidebar = () => {
    return (
        <div className="md:w-52 w-full h-auto md:h-screen bg-white  text-gray-900 p-4 border-r border-gray-200  flex flex-col">
            {/* <div className="relative mb-4">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search components..."
                    className="w-full pl-10 pr-3 py-2 border rounded-md text-sm bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
            </div> */}
            <div className="flex flex-row items-center justify-center md:justify-start md:items-start gap-4 md:gap-2 md:flex-col space-y-2">
                {sidebarItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.route}
                        className={({ isActive }) =>
                            `flex justify-between w-full items-center p-2 rounded-lg transition-all font-medium text-gray-700 ${isActive ? "bg-blue-50 !text-blue-600" : "hover:bg-gray-100"}`
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
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <div className="flex-1" >
                <Outlet />
            </div>
        </div>
    );
};

export default Index;
