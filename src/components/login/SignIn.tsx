import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../authentication/firebase";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth.currentUser);

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
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
              Login
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
                type="submit"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <Link to="/signup" className="btn-green mt-4 flex justify-center">
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
