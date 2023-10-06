import { useState } from "react";
import { BackButton } from "../../utils/helper";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="mb-16 flex flex-col items-center justify-around">
          <h2 className="mb-12 text-center text-4xl font-bold">Counter</h2>
          <div className="mb-16 flex gap-8">
            <button className="btn-primary" onClick={increment}>
              Increment
            </button>
            <button className="btn-primary" onClick={decrement}>
              Decrement
            </button>
          </div>
          <p className="text-xl">
            You clicked <strong className="text-lg">{count}</strong> times
          </p>
        </div>
      </div>
    </section>
  );
};

export default Count;
