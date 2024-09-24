import { Link } from "react-router-dom";
import { useState } from "react";
import { Client, Account, ID } from "appwrite";

// Initialize Appwrite client
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("666bdcba001b25441997");

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const account = new Account(client);

  const handleForm = async (event) => {
    event.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Create account
      const response = await account.create(ID.unique(), email, password, name);
      console.log(response); // Success

      // Redirect to sign-in page after successful signup
      window.location.href = "/signin";
    } catch (error) {
      console.error(error); // Failure
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center">
      <form
        onSubmit={handleForm}
        className="w-[28rem] text-white mx-auto px-8 py-8 bg-black rounded-s-sm flex flex-col gap-4"
      >
        <div className="row w-full text-center text-2xl text-white">
          <h2>Create an Account</h2>
        </div>
        <div className="row flex flex-col w-full gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="px-2 border-[1px] border-slate-500 py-2 rounded-sm w-full bg-transparent text-pink-600"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="row flex flex-col w-full gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="px-2 border-[1px] border-slate-500 py-2 rounded-sm w-full bg-transparent text-pink-600"
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>
        <div className="row flex flex-col w-full gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="px-2 border-[1px] border-slate-500 py-2 rounded-sm w-full bg-transparent text-pink-600"
            type="password"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
        </div>
        <div className="row flex items-center justify-center mt-8 flex-col w-full gap-2">
          <button
            type="submit"
            className="py-2 rounded-sm border-[1px] border-transparent text-slate-100 duration-300 ease-in bg-pink-600 px-10 hover:text-white hover:border-[1px] hover:border-pink-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
