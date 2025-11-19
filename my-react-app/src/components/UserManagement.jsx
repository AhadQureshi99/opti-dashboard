import React from "react";
import Sidebar from "./Sidebar";
import { Search, Menu, Edit, Trash2, Plus } from "lucide-react";

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [mainUsers, setMainUsers] = React.useState([
    {
      id: 332,
      name: "Hashim Naveed",
      email: "hashimnaveed804@gmail.com",
      phone: "03123456789",
      role: "User",
      subUsers: 0,
      created: "Nov 18, 2025",
    },
    {
      id: 331,
      name: "user_2277",
      email: "islamabadoptics@gmail.com",
      phone: "03299112277",
      role: "Main User",
      subUsers: 2,
      created: "Nov 18, 2025",
    },
  ]);

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
    subUsers: 0,
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    const id = Date.now() % 1000000;
    const created = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const user = {
      id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      subUsers: Number(newUser.subUsers),
      created,
    };

    setMainUsers((s) => [user, ...s]);
    setShowAddModal(false);
    setNewUser({ name: "", email: "", phone: "", role: "User", subUsers: 0 });
  };

  // --- SUB USERS ---
  const subUsers = [
    {
      id: 311,
      name: "jawadkk5444@gmail.com",
      email: "jawad54447677@gmail.com",
      phone: "03299172980",
      parent: "Jawad Khan",
      status: "Sub",
      created: "Nov 04, 2025",
    },
    {
      id: 257,
      name: "Muaz Ahmad",
      email: "muazahmad944@gmail.com",
      phone: "03102597611",
      parent: "Abu Huraira",
      status: "Sub",
      created: "Oct 27, 2025",
    },
    {
      id: 206,
      name: "Eyeriver",
      email: "janiboss281@gmail.com",
      phone: "03219453113",
      parent: "Eye River281",
      status: "Sub",
      created: "Oct 18, 2025",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-7 overflow-y-auto">
        {/* MOBILE TOP BAR */}
        <div className="md:hidden bg-white border-b p-4 flex items-center sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={22} />
          </button>
          <h1 className="ml-4 text-lg font-semibold">Users Management</h1>
        </div>

        {/* 🔥 USERS HEADER */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <span className="text-green-600">👤</span> All Users ({mainUsers.length})
        </h1>

        {/* TOP CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm">Show</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="text-sm">entries</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                className="pl-10 pr-3 py-2 rounded-lg border border-gray-300 w-full focus:outline-none"
                placeholder="Search users..."
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 w-full sm:w-auto"
            >
              <Plus size={16} /> Add New User
            </button>
          </div>
        </div>

        {/* USERS TABLE */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <div className="hidden md:grid grid-cols-12 bg-green-700 text-white font-semibold text-sm py-3 px-4">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Phone</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-1">Sub Users</div>
            <div className="col-span-1 text-center">Actions</div>
          </div>

          {/* MOBILE USERS CARD */}
          {mainUsers.map((u) => (
            <div
              key={u.id}
              className="md:grid md:grid-cols-12 flex flex-col gap-2 md:gap-0 px-4 py-3 border-b hover:bg-gray-50"
            >
              {/* ID */}
              <div className="md:col-span-1 font-semibold">
                <span className="md:hidden text-xs text-gray-500">ID: </span>
                {u.id}
              </div>

              {/* NAME */}
              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Name: </span>
                {u.name}
              </div>

              {/* EMAIL */}
              <div className="md:col-span-3 break-words">
                <span className="md:hidden text-xs text-gray-500">Email: </span>
                {u.email}
              </div>

              {/* PHONE */}
              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Phone: </span>
                {u.phone}
              </div>

              {/* ROLE */}
              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Role: </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {u.role}
                </span>
              </div>

              {/* SUB USERS */}
              <div className="md:col-span-1">
                <span className="md:hidden text-xs text-gray-500">Sub: </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                  {u.subUsers}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="md:col-span-1 flex gap-2 justify-start md:justify-center mt-1">
                <button className="bg-green-500 p-2 rounded text-white hover:bg-green-600">
                  <Edit size={16} />
                </button>
                <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ADD USER MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowAddModal(false)}
            />
            <form
              onSubmit={handleAddUser}
              className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 z-50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Add New User</h3>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>

              {/* MODAL FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  required
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  placeholder="Full name"
                  className="border px-3 py-2 rounded-md"
                />

                <input
                  required
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  placeholder="Email"
                  className="border px-3 py-2 rounded-md"
                />

                <input
                  value={newUser.phone}
                  onChange={(e) =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                  placeholder="Phone"
                  className="border px-3 py-2 rounded-md"
                />

                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                  className="border px-3 py-2 rounded-md"
                >
                  <option>User</option>
                  <option>Main User</option>
                  <option>Admin</option>
                </select>

                <input
                  value={newUser.subUsers}
                  onChange={(e) =>
                    setNewUser({ ...newUser, subUsers: e.target.value })
                  }
                  placeholder="Sub users count"
                  className="border px-3 py-2 rounded-md"
                />
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-md border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-green-600 text-white"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 🔥 SUB USERS SECTION */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mt-8 mb-3">
          <span className="text-green-600">👥</span> Sub Users ({subUsers.length})
        </h2>

        {/* SUB USER CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm">Show</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="text-sm">entries</span>
          </div>

          <div className="relative w-full md:w-72">
            <input
              className="pl-10 pr-3 py-2 rounded-lg border border-gray-300 w-full focus:outline-none"
              placeholder="Search sub users..."
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* SUB USERS TABLE */}
        <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
          <div className="hidden md:grid grid-cols-12 bg-green-700 text-white font-semibold text-sm py-3 px-4">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Phone</div>
            <div className="col-span-2">Parent</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1 text-center">Actions</div>
          </div>

          {/* SUB USERS MOBILE → CARD VIEW */}
          {subUsers.map((u) => (
            <div
              key={u.id}
              className="md:grid md:grid-cols-12 flex flex-col gap-2 px-4 py-3 border-b hover:bg-gray-50"
            >
              <div className="md:col-span-1">
                <span className="md:hidden text-xs text-gray-500">ID: </span>
                {u.id}
              </div>

              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Name: </span>
                {u.name}
              </div>

              <div className="md:col-span-3 break-words">
                <span className="md:hidden text-xs text-gray-500">Email: </span>
                {u.email}
              </div>

              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Phone: </span>
                {u.phone}
              </div>

              <div className="md:col-span-2">
                <span className="md:hidden text-xs text-gray-500">Parent: </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                  {u.parent}
                </span>
              </div>

              <div className="md:col-span-1">
                <span className="md:hidden text-xs text-gray-500">Status: </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {u.status}
                </span>
              </div>

              <div className="md:col-span-1 flex gap-2 justify-start md:justify-center mt-1">
                <button className="bg-green-500 p-2 rounded text-white hover:bg-green-600">
                  <Edit size={16} />
                </button>
                <button className="bg-red-500 p-2 rounded text-white hover:bg-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
