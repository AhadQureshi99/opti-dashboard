import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const OrderManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const orders = [
    {
      id: 2446,
      tracking: "ORD20251119_6806",
      name: "Sumaiya",
      phone: "03109607955",
      total: "Rs. 4,000.00",
      advance: "Rs. 4,000.00",
      balance: "Rs. 0.00",
      status: "Pending",
      created: "Nov 19, 2025",
    },
    {
      id: 2445,
      tracking: "ORD20251119_8548",
      name: "Ghulam Rabbani",
      phone: "03125111553",
      total: "Rs. 600.00",
      advance: "Rs. 600.00",
      balance: "Rs. 0.00",
      status: "Pending",
      created: "Nov 19, 2025",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden bg-white shadow-sm p-4 flex items-center mb-4 rounded-lg">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={22} />
          </button>
          <h1 className="ml-4 text-lg font-semibold">Orders Management</h1>
        </div>

        <h1 className="text-2xl font-bold mb-4">Orders</h1>

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Total Orders", value: "2,369" },
            { title: "Pending Orders", value: "427" },
            { title: "Completed Orders", value: "1,942" },
            { title: "Total Revenue", value: "Rs. 15,255,380" },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-sm border rounded-xl p-4 sm:p-6">
              <p className="text-gray-500 text-sm sm:text-base">{item.title}</p>
              <h2 className="text-xl sm:text-3xl font-bold text-green-700 truncate">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* FILTER BAR */}
        <div className="bg-white shadow-sm border rounded-xl p-4 sm:p-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              placeholder="Tracking ID, Name, Phone"
              className="border px-3 py-2 rounded-lg w-full"
            />

            <select className="border px-3 py-2 rounded-lg w-full">
              <option>All Status</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>

            <input type="date" className="border px-3 py-2 rounded-lg w-full" />
            <input type="date" className="border px-3 py-2 rounded-lg w-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto">
              Filter
            </button>
            <button className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 w-full sm:w-auto">
              Reset
            </button>
          </div>
        </div>

        {/* ORDERS TABLE */}
        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
          {/* HEADER + BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center mb-6">
            <h2 className="text-lg font-semibold">🗂️ All Orders (2369)</h2>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm w-full sm:w-auto">
                ⬇ Export CSV
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm w-full sm:w-auto">
                ⬆ Import CSV
              </button>
            </div>
          </div>

          {/* ENTires + Search */}
          <div className="flex flex-col md:flex-row md:justify-between gap-3 items-start md:items-center mb-4">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border px-3 py-2 rounded-lg">
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>
              <span>entries</span>
            </div>

            <input
              placeholder="Search orders..."
              className="border px-3 py-2 rounded-lg w-full md:w-60"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="border-b text-gray-600 text-sm">
                  <th className="py-3 px-2">ID</th>
                  <th className="py-3 px-2">TRACKING ID</th>
                  <th className="py-3 px-2">PATIENT NAME</th>
                  <th className="py-3 px-2">PHONE</th>
                  <th className="py-3 px-2">TOTAL</th>
                  <th className="py-3 px-2">ADVANCE</th>
                  <th className="py-3 px-2">BALANCE</th>
                  <th className="py-3 px-2">STATUS</th>
                  <th className="py-3 px-2">CREATED</th>
                  <th className="py-3 px-2 text-center">ACTIONS</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {orders.map((o, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2">{o.id}</td>
                    <td className="py-3 px-2 font-semibold text-blue-700">{o.tracking}</td>
                    <td className="py-3 px-2">{o.name}</td>
                    <td className="py-3 px-2">{o.phone}</td>
                    <td className="py-3 px-2">{o.total}</td>
                    <td className="py-3 px-2">{o.advance}</td>
                    <td className="py-3 px-2">{o.balance}</td>

                    <td className="py-3 px-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          o.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>

                    <td className="py-3 px-2">{o.created}</td>

                    <td className="py-3 px-2 flex gap-2 justify-center flex-wrap">
                      <button className="px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-xs">
                        View
                      </button>
                      <button className="px-3 py-1 text-white bg-green-600 rounded-lg hover:bg-green-700 text-xs">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-red-700 text-xs">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
