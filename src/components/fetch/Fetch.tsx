import { useEffect, useState } from "react";
import { BackButton } from "../../utils/helper";

const Fetch = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    return async function () {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const data = await res.json();
      setUserData(data);
    };
  }, [setUserData]);

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <h2 className="mb-12 text-center font-serif text-3xl">User Data</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p>
            <strong>Name: </strong>{" "}
            {userData.name || "(Need to populate website here)"}
          </p>
          <p>
            <strong>Website: </strong>
            {userData.website || "(Need to populate website here)"}
          </p>
          <p>
            <strong>Email: </strong>
            {userData.email || "(Need to populate email here)"}
          </p>
          <p>
            <strong>Phone: </strong>
            {userData.phone || "(Need to populate phone here)"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fetch;
