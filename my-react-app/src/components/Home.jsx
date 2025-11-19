import React from "react";
import Sidebar from "./Sidebar";
import {
  Users,
  UserPlus,
  ShoppingCart,
  Clock,
  CheckCircle,
  UserCheck,
  Store,
  LineChart,
  Menu,
} from "lucide-react";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const stats = [
    { icon: Users, value: "266", label: "Total Users" },
    { icon: UserPlus, value: "12", label: "Sub Users" },
    { icon: ShoppingCart, value: "2,329", label: "Total Orders" },
    { icon: Clock, value: "401", label: "Pending Orders" },
    { icon: CheckCircle, value: "1,928", label: "Completed Orders" },
    { icon: UserCheck, value: "266", label: "Active Users" },
    { icon: Store, value: "0", label: "Active Shops" },
    { icon: LineChart, value: "82.8%", label: "Completion Rate" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">
            OptiSlip Admin
          </h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Header Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
              <span className="text-green-600">🧭</span> Dashboard Overview
            </h2>
            <p className="text-gray-500 mt-1">Dashboard</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden"
              >
                {/* Green left strip */}
                <div className="absolute left-0 top-0 w-2 h-full bg-green-600 rounded-l-xl"></div>

                <div className="flex items-center gap-4">
                  {/* Icon Box */}
                  <div className="bg-green-600 p-3 rounded-lg">
                    <item.icon size={26} className="text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-2xl font-semibold text-green-700">
                      {item.value}
                    </p>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders + Recent Users Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* ================== Recent Orders ================== */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Users size={20} className="text-black" /> Recent Orders
                </h2>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
                  View All
                </button>
              </div>

              <hr className="border-gray-200 mb-4" />

              {/* Table Header */}
              <div className="grid grid-cols-5 font-semibold text-gray-500 text-sm mb-3 gap-2">
                <p>TRACKING ID</p>
                <p className="truncate">PATIENT NAME</p>
                <p className="truncate">AMOUNT</p>
                <p className="truncate">STATUS</p>
                <p className="truncate">DATE</p>
              </div>

              {/* Table Rows */}
              {[
                [
                  "ORD20251116_9524",
                  "Sakina Bagham",
                  "Rs. 2,300.00",
                  "Pending",
                  "Nov 16, 2025",
                ],
                [
                  "ORD20251116_5845",
                  "Kainat Imtiaz",
                  "Rs. 4,500.00",
                  "Pending",
                  "Nov 16, 2025",
                ],
                [
                  "ORD20251116_4206",
                  "Tobaa Tariq",
                  "Rs. 4,500.00",
                  "Pending",
                  "Nov 16, 2025",
                ],
                [
                  "ORD20251116_2853",
                  "Hania",
                  "Rs. 7,000.00",
                  "Pending",
                  "Nov 16, 2025",
                ],
                [
                  "ORD20251116_3916",
                  "Eman",
                  "Rs. 7,500.00",
                  "Pending",
                  "Nov 16, 2025",
                ],
              ].map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 py-4 text-sm border-b border-gray-100 gap-2 min-w-0"
                >
                  <p className="font-semibold">{row[0]}</p>
                  <p className="truncate">{row[1]}</p>
                  <p className="truncate">{row[2]}</p>
                  <p className="flex-shrink-0">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {row[3]}
                    </span>
                  </p>
                  <p className="truncate">{row[4]}</p>
                </div>
              ))}
            </div>

            {/* ================== Recent Users ================== */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Users size={20} className="text-black" /> Recent Users
                </h2>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
                  View All
                </button>
              </div>

              <hr className="border-gray-200 mb-4" />

              <div className="space-y-5">
                {[
                  ["Aasim Mushtaq", "aasim2142@gmail.com"],
                  ["user_1333", "mughalopticalservices1@gmail.com"],
                  ["Abu Huraira", "abu741366@gmail.com"],
                  ["Wajih Hassan", "wajih.2684@gmail.com"],
                  ["muhammad Abrash", "muhammadabrash7@gmail.com"],
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 min-w-0"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
                        <Users size={20} className="text-gray-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 truncate">
                          {user[0]}
                        </p>
                        <p className="text-gray-500 text-sm truncate">
                          {user[1]}
                        </p>
                      </div>
                    </div>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">
                      User
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
