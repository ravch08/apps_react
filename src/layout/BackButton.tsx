import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="absolute left-6 top-6 bg-zinc-900 px-6 py-2 text-white"
    >
      &#171; Back to Home
    </Link>
  );
};

export default BackButton;
