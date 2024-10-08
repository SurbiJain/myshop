import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    if (localStorage.getItem("user")) {
      router.push("/");
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email: email, password: password };
    //   const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_HOST}/api/login`;
    // const postData = {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(formData),
    // };
    // const response = await fetch(apiUrlEndpoint, postData);
    // const user = await response.json()

    // if (user.success){
    //     localStorage.setItem("token", user.token)
    //     localStorage.setItem("userId", user.userId)
    //   router.push('about')
    // }
    if (email && password) {
      localStorage.setItem("user", email);
      router.push("about");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <section className="flex main  flex-1 flex-col justify-center p-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href={"/forgot"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href={"/signup"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create New Account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;

// export async function getServerSideProps(context) {
//   const apiUrlEndpoint = `http://localhost:3001/api/getdata`;
//   const postData = {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(users),
//   };
//   // const response = await fetch(apiUrlEndpoint, postData);
//   // const res = await response.json();
//   // const apiUrlEndpoint = `http://localhost:3001/api/signup`;
//   // const response = await fetch(apiUrlEndpoint);
//   // const users = await response.json();

//   return {
//     props: users,
//   };
// }
