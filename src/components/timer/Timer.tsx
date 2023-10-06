import { useEffect, useState } from "react";
import { BackButton } from "../../utils/helper";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (timerId === null) {
      const id = setInterval(() => setCount((prev) => prev + 1), 1000);
      setTimerId(id);
    }
  };

  const pauseTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const resetTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setCount(0);
  };

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="flex flex-col items-center justify-around">
          <h2 className="mb-12 font-serif text-5xl">Timer</h2>

          <div className="mb-16 flex items-center gap-4">
            <button className="btn-primary" onClick={startTimer}>
              Start
            </button>
            <button className="btn-primary" onClick={pauseTimer}>
              Pause
            </button>
            <button className="btn-primary" onClick={resetTimer}>
              Reset
            </button>
          </div>
          <p className="text-xl">
            Watch: <strong>{count}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timer;
