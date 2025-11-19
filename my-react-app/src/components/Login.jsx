import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", "demo-token");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT GREEN SECTION */}
      <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center items-center px-12">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
          <div className="text-center">
            <img
              src="https://optislip.com/assets/images/OptiSlip.png"
              alt="Opti Slip"
              className="w-32 mb-4"
            />
          </div>
          <h1 className="text-xl font-semibold tracking-wider">OPTI SLIP</h1>
        </div>

        {/* Description */}
        <p className="text-center text-sm max-w-md leading-relaxed opacity-90">
          Opti Slip Database System, your all-in-one platform for managing your
          optical business efficiently. This website is designed to help you
          easily manage customer information, generate professional digital
          slips, and maintain accurate customer records all in one secure place.
        </p>
      </div>

      {/* RIGHT WHITE LOGIN FORM */}
      <div className="w-1/2 flex items-center justify-center p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Welcome text */}
          <h2 className="text-4xl font-semibold mb-8">welcome !</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                Email or Username
              </label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter your email or username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="••••••••"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-green-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
            >
              SIGN IN
            </button>

            {/* Divider */}
            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
