import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeMenu, setActiveMenu] = React.useState("dashboard");
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const p = location.pathname || ''
    if (p.startsWith('/users')) setActiveMenu('users')
    else if (p.startsWith('/orders')) setActiveMenu('orders')
    else if (p.startsWith('/settings')) setActiveMenu('settings')
    else setActiveMenu('dashboard')
  }, [location.pathname])

  const menuItemClass = (menu) =>
    `flex items-center gap-3 px-6 py-[14px] cursor-pointer 
    transition-all text-[15px]
    ${
      activeMenu === menu
        ? "bg-[#59a66a]/40 border-l-4 border-white"
        : "border-l-4 border-transparent hover:bg-[#ffffff1a]"
    }
    `;

  return (
    <div
      className={`fixed md:static top-0 left-0 h-screen w-64 bg-[#198754] flex flex-col text-white transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Close Button for Mobile */}
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
      >
        <X size={24} />
      </button>

      {/* Logo Header */}
      <div className="p-6 text-center border-b border-white/20">
        <div className="flex items-center justify-center gap-2 mb-1">
          <img className="w-32 mb-4" src="https://optislip.com/assets/images/OptiSlip.png" alt="" />
      
        </div>
        <p className="text-white/90 text-xs">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <div
          onClick={() => { navigate('/'); setIsOpen && setIsOpen(false); setActiveMenu("dashboard") }}
          className={menuItemClass("dashboard")}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </div>

        <div
          onClick={() => { navigate('/users'); setIsOpen && setIsOpen(false); setActiveMenu("users") }}
          className={menuItemClass("users")}
        >
          <Users size={18} />
          <span>Users Management</span>
        </div>

        <div
          onClick={() => { navigate('/orders'); setIsOpen && setIsOpen(false); setActiveMenu("orders") }}
          className={menuItemClass("orders")}
        >
          <ShoppingCart size={18} />
          <span>Orders</span>
        </div>

        <div
          onClick={() => { navigate('/settings'); setIsOpen && setIsOpen(false); setActiveMenu("settings") }}
          className={menuItemClass("settings")}
        >
          <Settings size={18} />
          <span>Settings</span>
        </div>
      </nav>

      {/* Bottom Admin Section */}
      <div className="p-6 border-t border-white/20 text-center">
        <div className="flex justify-center mb-3">
          <div className="bg-white/20 p-3 rounded-full">
            <Users size={22} />
          </div>
        </div>

        <p className="text-sm font-semibold mb-4">Admin</p>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/15 hover:bg-white/25 rounded-lg transition">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
