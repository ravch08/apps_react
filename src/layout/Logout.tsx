import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await signOut(auth);
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="absolute right-6 top-6 cursor-pointer rounded-md bg-zinc-900 px-6 py-2 text-white"
    >
      LOGOUT
    </button>
  );
};

export default Logout;
