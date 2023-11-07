import { useEffect, useState } from "react";
import BackButton from "../../layout/BackButton";

const colors = [
  {
    id: 1,
    answer: "#818FB4",
    options: ["#363062", "#435585", "#818FB4"],
  },
  {
    id: 2,
    answer: "#B6FFFA",
    options: ["#B6FFFA", "#98E4FF", "#80B3FF"],
  },
  {
    id: 3,
    answer: "#04364A",
    options: ["#176B87", "#04364A", "#64CCC5"],
  },
  {
    id: 4,
    answer: "#7C81AD",
    options: ["#2E4374", "#4B527E", "#7C81AD"],
  },
  {
    id: 5,
    answer: "#D7E5CA",
    options: ["#F9F3CC", "#D7E5CA", "#4B527E"],
  },
];

const ColorPicker = () => {
  const [value, setValue] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAnswer(colors[value].answer);
  }, [value]);

  const handleSelection = (e) => {
    const selectedOption = e.target.textContent;

    if (selectedOption === answer) {
      setMessage("Correct Answer");

      setTimeout(() => {
        if (value < colors.length - 1) {
          setValue((prev) => prev + 1);
          setMessage("");
        } else {
          setMessage("All questions answered!");
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    setValue(0);
    setMessage("");
  };

  return (
    <section className="section">
      <div className="container mx-auto h-[80vh]">
        <BackButton />
        <div className="flex flex-col">
          <h2 className="mb-12 text-center font-serif text-5xl">
            Color Picker
          </h2>

          <div
            key={colors[value].id}
            className="mb-12 flex flex-col items-center justify-center"
          >
            <div
              style={{ backgroundColor: `${answer}` }}
              className={` mb-12 h-40 w-2/4 border border-gray-100`}
            ></div>
            <div className="flex gap-4">
              {colors[value].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={handleSelection}
                  className="rounded-md bg-slate-500 px-8 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-slate-700"
                >
                  {option}
                </button>
              ))}
            </div>

            <p
              className={
                message === "Correct Answer"
                  ? "mt-12 text-green-600"
                  : "mt-12 text-red-500"
              }
            >
              {message}
            </p>

            <button
              onClick={handleReset}
              className={
                message == "All questions answered!" ? "btn-green" : "d-none"
              }
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPicker;
