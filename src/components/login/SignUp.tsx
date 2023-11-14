import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../authentication/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpWithEmail = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignInWithGoogle = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-full">
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col ">
            <h2 className="mb-12 text-center font-serif text-5xl uppercase">
              Register
            </h2>
            <form className="mx-auto flex w-1/3 flex-col text-center">
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email..."
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 border-none bg-slate-300 px-4 py-2 outline-none"
              />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Password here..."
                onChange={(e) => setPassword(e.target.value)}
                className="border-none bg-slate-300 px-4 py-2 outline-none"
              />

              <button
                className="btn-primary mt-12"
                onClick={handleSignUpWithEmail}
              >
                Register
              </button>

              <span className="mt-12 text-lg font-bold">OR</span>

              <button
                onClick={handleSignInWithGoogle}
                className="btn-primary mt-12 flex justify-center"
              >
                <svg
                  fill="white"
                  className="h-5 w-5"
                  viewBox="0 0 488 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>

              <Link
                to="/signin"
                className="btn-green mt-12 flex justify-center"
              >
                Sign In
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
