import { useState } from "react";

// Show delete button when checked

const CheckedDelete = () => {
  const options = ["cricket", "football", "hockey"];

  const [gameOption, setGameOption] = useState([]);

  const handleDelete = (e) => {
    e.preventDefault();
    setGameOption((prev) => prev.filter((item) => item !== option));
  };

  return (
    <div>
      <h2>Select you favourite Game!</h2>

      <form>
        {options.map((option) => (
          <div key={option} className="form-control2">
            <label htmlFor={option}>
              <input
                id={option}
                value={option}
                type="checkbox"
                checked={gameOption.includes(option)}
                onChange={(e) =>
                  setGameOption((prev) => [...prev, e.target.value])
                }
              />
              {option}
            </label>

            <button
              className={gameOption.includes(option) ? "" : "hide"}
              onClick={handleDelete}
            >
              X
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CheckedDelete;
