import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, User, KeyRound } from "lucide-react";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">

        {/* MOBILE TOP BAR */}
        <div className="md:hidden bg-white border-b p-4 flex items-center">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <h1 className="ml-4 text-lg font-semibold">Settings</h1>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
            <span className="text-green-600">⚙</span> Settings
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Dashboard / Settings
          </p>
        </div>

        {/* SETTINGS CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT – ACCOUNT SETTINGS */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <User size={20} /> Account Settings
            </h2>
            <hr className="mb-4" />

            {/* FORM */}
            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium">Admin Name *</label>
                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  type="email"
                  defaultValue="info@ainakstore.com"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  defaultValue="03325122739"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Role</label>
                <p className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Administrator
                </p>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg">
                Update Profile
              </button>
            </div>
          </div>

          {/* RIGHT – CHANGE PASSWORD */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <KeyRound size={20} /> Change Password
            </h2>
            <hr className="mb-4" />

            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium">Current Password *</label>
                <input
                  type="password"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium">New Password *</label>
                <input
                  type="password"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 6 characters
                </p>
              </div>

              <div>
                <label className="text-sm font-medium">Confirm New Password *</label>
                <input
                  type="password"
                  className="w-full mt-1 p-2.5 border rounded-lg focus:ring focus:ring-green-200"
                />
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg">
                Update Password
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
