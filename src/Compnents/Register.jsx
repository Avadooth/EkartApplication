import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Detail data", data);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`erroree in fetch  ${res.status}`);
      }
      const result = await res.json(); // Parse response JSON
      console.log("Server response:", result);
    } finally {
      setLoading(false);
    }
  };

  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <>
      <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 class="text-white text-lg font-semibold">
                Create Your Account
              </h4>
              <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 class="text-white text-lg font-semibold">
                Simple & Secure Registration
              </h4>
              <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <form
            className="md:col-span-2 w-full py-6 px-6 sm:px-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="mb-6">
              <h3 class="text-gray-800 text-2xl font-bold">
                Create an account
              </h3>
            </div>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="text-gray-800 text-start text-sm mb-2 block">
                  Name
                </label>
                <div className="relative flex items-center">
                  <input
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Enter your name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm text-start mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-800 text-start text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center ">
                  <input
                    className="text-gray-800 text-sm bg-white border border-gray-300 w-full px-4 py-2.5 rounded-md outline-blue-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
              </div>

              <div>
                <label className="text-gray-800 text-start text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    className="text-gray-800 text-sm bg-white border border-gray-300 w-full px-4 py-2.5 rounded-md outline-blue-500"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <div
                    onClick={handlePassword}
                    className="absolute right-4 text-gray-600 cursor-pointer text-sm"
                  >
                    {show ? "Hide" : "Show"}
                  </div>
                </div>
                {/* {errors.password && (
                <p className="error">{errors.password.message}</p>
              )} */}
              </div>

              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  {...register("terms", { required: true })}
                  class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  class="ml-3 block text-sm text-gray-800"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    class="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div class="!mt-12">
                <button
                  disabled={loading}
                  type="submit"
                  class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                >
                  {loading ? "Processing" : "Create an account"}
                </button>
              </div>
              <p class="text-gray-800 text-sm mt-6 text-center">
                Already have an account?{" "}
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
